import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { supabase } from '../lib/supabase';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    fetchBookings();

    // Realtime subscription
    const subscription = supabase
      .channel('bookings')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, () => {
        fetchBookings();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/admin');
    } else {
      setUser(user);
    }
  };

  const fetchBookings = async () => {
    try {
      let query = supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;
      setBookings(data || []);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      fetchBookings();
    } catch (err) {
      alert('Klaida atnaujinant statusą: ' + err.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter;
    const matchesSearch = 
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm) ||
      (booking.company && booking.company.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  const getStatusBadge = (status) => {
    const badges = {
      pending: { text: 'Laukiama', class: 'status-pending' },
      confirmed: { text: 'Patvirtinta', class: 'status-confirmed' },
      cancelled: { text: 'Atšaukta', class: 'status-cancelled' },
      completed: { text: 'Įvykdyta', class: 'status-completed' }
    };
    return badges[status] || badges.pending;
  };

  if (loading) {
    return (
      <div className="admin-container">
        <div className="loading">Kraunama...</div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">Prisijungęs: {user?.email}</p>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          Atsijungti
        </button>
      </div>

      <div className="admin-controls">
        <input
          type="text"
          placeholder="🔍 Ieškoti pagal vardą, email, telefoną..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-buttons">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            Visi ({bookings.length})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          >
            Laukiama ({bookings.filter(b => b.status === 'pending').length})
          </button>
          <button
            onClick={() => setFilter('confirmed')}
            className={`filter-btn ${filter === 'confirmed' ? 'active' : ''}`}
          >
            Patvirtinta ({bookings.filter(b => b.status === 'confirmed').length})
          </button>
        </div>
      </div>

      <div className="bookings-grid">
        {filteredBookings.length === 0 ? (
          <div className="no-bookings">
            Booking'ų nerasta
          </div>
        ) : (
          filteredBookings.map(booking => {
            const statusBadge = getStatusBadge(booking.status);
            return (
              <div key={booking.id} className="booking-card">
                <div className="booking-header">
                  <div className={`status-badge ${statusBadge.class}`}>
                    {statusBadge.text}
                  </div>
                  <span className="booking-date-created">
                    {format(new Date(booking.created_at), 'yyyy-MM-dd HH:mm')}
                  </span>
                </div>

                <div className="booking-info">
                  <h3 className="booking-name">{booking.name}</h3>
                  {booking.company && <p className="booking-company">{booking.company}</p>}
                  
                  <div className="booking-contact">
                    <p>📧 {booking.email}</p>
                    <p>📞 {booking.phone}</p>
                  </div>

                  <div className="booking-datetime">
                    <p><strong>Data:</strong> {format(new Date(booking.booking_date), 'yyyy-MM-dd')}</p>
                    <p><strong>Laikas:</strong> {booking.booking_time}</p>
                  </div>

                  {booking.message && (
                    <div className="booking-message">
                      <strong>Žinutė:</strong>
                      <p>{booking.message}</p>
                    </div>
                  )}
                </div>

                <div className="booking-actions">
                  <select
                    value={booking.status}
                    onChange={(e) => updateStatus(booking.id, e.target.value)}
                    className="status-select"
                  >
                    <option value="pending">Laukiama</option>
                    <option value="confirmed">Patvirtinta</option>
                    <option value="completed">Įvykdyta</option>
                    <option value="cancelled">Atšaukta</option>
                  </select>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

