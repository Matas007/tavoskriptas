import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import './AdminLogin.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (loginError) throw loginError;

      if (data.user) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.message || 'Neteisingas el. paštas arba slaptažodis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="admin-login-title">Admin Prisijungimas</h2>
        
        {error && (
          <div className="alert alert-error">
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="email">El. paštas</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@tavoskriptas.lt"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Slaptažodis</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="btn-login"
            disabled={loading}
          >
            {loading ? 'Jungiamasi...' : 'Prisijungti'}
          </button>
        </form>
      </div>
    </div>
  );
}

