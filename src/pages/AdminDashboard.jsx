import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      const data = await response.json();
      setSubmissions(data.data || []);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      // Fallback for development if API is not available
      setError('Unable to load data from backend API. Please ensure the backend server is running.');
      // Optional: uncomment below to mock data during frontend-only dev
      // setSubmissions([
      //   { _id: '1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', message: 'Hello, I am interested in your AI solutions.', createdAt: new Date().toISOString() },
      //   { _id: '2', name: 'Jane Smith', email: 'jane@test.com', phone: '', message: 'Can we schedule a demo?', createdAt: new Date().toISOString() }
      // ]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete submission');
      }

      setSubmissions(submissions.filter(sub => sub.id !== id));
    } catch (err) {
      console.error('Error deleting submission:', err);
      alert('Failed to delete the submission. Please try again later.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - IAMKRATU.AI</title>
      </Helmet>

      <div style={{
        minHeight: '100vh',
        background: '#0B0D17',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Topbar */}
        <header style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            }}>
              <i data-lucide="shield-check" style={{ color: 'white', fontSize: '20px' }} />
            </div>
            <h1 style={{ fontSize: '1.25rem', margin: 0, fontWeight: '600' }}>Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              color: '#f87171',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.2)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.1)'}
          >
            Logout
          </button>
        </header>

        {/* Main Content */}
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>Contact Submissions</h2>
            <p style={{ color: '#9ca3af', margin: 0 }}>Manage and respond to user inquiries.</p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <div style={{
                display: 'inline-block',
                width: '40px',
                height: '40px',
                border: '3px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '50%',
                borderTopColor: '#6366f1',
                animation: 'spin 1s ease-in-out infinite'
              }}></div>
              <p style={{ color: '#9ca3af', marginTop: '1rem' }}>Loading submissions...</p>
              <style>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : error && submissions.length === 0 ? (
            <div style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px dashed rgba(239, 68, 68, 0.3)',
              borderRadius: '16px',
              padding: '3rem',
              textAlign: 'center'
            }}>
              <i data-lucide="alert-circle" style={{ fontSize: '48px', color: '#f87171', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#f87171' }}>Connection Error</h3>
              <p style={{ color: '#9ca3af' }}>{error}</p>
              <button
                onClick={fetchSubmissions}
                style={{
                  marginTop: '1.5rem',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Retry
              </button>
            </div>
          ) : submissions.length === 0 ? (
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px dashed rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '4rem',
              textAlign: 'center'
            }}>
              <i data-lucide="inbox" style={{ fontSize: '48px', color: '#6b7280', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Submissions Yet</h3>
              <p style={{ color: '#9ca3af' }}>When users fill out the contact form, they will appear here.</p>
            </div>
          ) : (
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              overflowX: 'auto'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(0, 0, 0, 0.2)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <th style={{ padding: '1rem 1.5rem', color: '#9ca3af', fontWeight: '500', fontSize: '14px' }}>Name</th>
                    <th style={{ padding: '1rem 1.5rem', color: '#9ca3af', fontWeight: '500', fontSize: '14px' }}>Email</th>
                    <th style={{ padding: '1rem 1.5rem', color: '#9ca3af', fontWeight: '500', fontSize: '14px' }}>Date</th>
                    <th style={{ padding: '1rem 1.5rem', color: '#9ca3af', fontWeight: '500', fontSize: '14px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((sub, index) => (
                    <tr key={sub._id || sub.id || index} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s' }}>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '15px' }}>{sub.full_name}</td>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '15px', color: '#a855f7' }}>{sub.email}</td>
                      <td style={{ padding: '1rem 1.5rem', fontSize: '14px', color: '#9ca3af' }}>
                        {new Date(sub.created_at || Date.now()).toLocaleDateString()}
                      </td>
                      <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                          <button
                            onClick={() => setSelectedSubmission(sub)}
                            style={{
                              background: 'rgba(99, 102, 241, 0.1)',
                              color: '#818cf8',
                              border: '1px solid rgba(99, 102, 241, 0.2)',
                              padding: '0.4rem 0.75rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '13px'
                            }}
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(sub._id || sub.id)}
                            style={{
                              background: 'rgba(239, 68, 68, 0.1)',
                              color: '#f87171',
                              border: '1px solid rgba(239, 68, 68, 0.2)',
                              padding: '0.4rem 0.75rem',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '13px'
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>

        {/* View Submission Modal */}
        {selectedSubmission && (
          <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            zIndex: 50
          }}>
            <div style={{
              background: '#111827',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '600px',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Submission Details</h3>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#9ca3af',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    lineHeight: 1
                  }}
                >
                  &times;
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Name</label>
                    <div style={{ fontSize: '15px' }}>{selectedSubmission.full_name}</div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Date</label>
                    <div style={{ fontSize: '15px' }}>{new Date(selectedSubmission.created_at || Date.now()).toLocaleString()}</div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Email</label>
                    <div style={{ fontSize: '15px', color: '#a855f7' }}>{selectedSubmission.email}</div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Phone</label>
                    <div style={{ fontSize: '15px' }}>{selectedSubmission.phone || 'N/A'}</div>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Message</label>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '1rem',
                    borderRadius: '12px',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {selectedSubmission.message || 'No message provided.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
