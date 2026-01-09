'use client';

import { useEffect, useState } from 'react';
import './styles.css';

export default function ResetPasswordBridge() {
  const [status, setStatus] = useState<'loading' | 'redirecting' | 'error' | 'no-app'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleRedirect = () => {
      try {
        // Get the hash fragment from the URL (contains access_token, refresh_token, etc.)
        const hash = window.location.hash;
        
        console.log('Bridge page loaded with hash:', hash);

        if (!hash || hash.length <= 1) {
          setStatus('error');
          setErrorMessage('No authentication tokens found in the link. Please request a new password reset.');
          return;
        }

        // Build the deep link URL with the hash fragment
        const appUrl = `strengthlens://auth/reset-password${hash}`;
        
        console.log('Redirecting to app:', appUrl);
        setStatus('redirecting');

        // Attempt to open the app
        window.location.href = appUrl;

        // After a short delay, show fallback UI if the app didn't open
        setTimeout(() => {
          setStatus('no-app');
        }, 2000);

      } catch (error) {
        console.error('Error in bridge redirect:', error);
        setStatus('error');
        setErrorMessage('An error occurred while processing your reset link.');
      }
    };

    handleRedirect();
  }, []);

  const handleManualOpen = () => {
    const hash = window.location.hash;
    const appUrl = `strengthlens://auth/reset-password${hash}`;
    window.location.href = appUrl;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Logo/Icon */}
        <div style={styles.iconContainer}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="32" fill="#2D6BFF" opacity="0.1" />
            <path
              d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C40.837 48 48 40.837 48 32C48 23.163 40.837 16 32 16ZM32 28C33.1046 28 34 28.8954 34 30V38C34 39.1046 33.1046 40 32 40C30.8954 40 30 39.1046 30 38V30C30 28.8954 30.8954 28 32 28ZM32 26C30.8954 26 30 25.1046 30 24C30 22.8954 30.8954 22 32 22C33.1046 22 34 22.8954 34 24C34 25.1046 33.1046 26 32 26Z"
              fill="#2D6BFF"
            />
          </svg>
        </div>

        {/* Status Messages */}
        {status === 'loading' && (
          <>
            <h1 style={styles.title}>Processing Reset Link...</h1>
            <p style={styles.description}>Please wait while we redirect you to the app.</p>
            <div style={styles.spinner} />
          </>
        )}

        {status === 'redirecting' && (
          <>
            <h1 style={styles.title}>Opening StrengthLens...</h1>
            <p style={styles.description}>You should be redirected to the app automatically.</p>
            <div style={styles.spinner} />
          </>
        )}

        {status === 'error' && (
          <>
            <h1 style={styles.title}>Something Went Wrong</h1>
            <p style={styles.description}>{errorMessage}</p>
            <a href="/auth/login" style={styles.button}>
              Go to Login
            </a>
          </>
        )}

        {status === 'no-app' && (
          <>
            <h1 style={styles.title}>Reset Your Password</h1>
            <p style={styles.description}>
              To reset your password, please open this link in the StrengthLens app.
            </p>

            <button onClick={handleManualOpen} style={styles.button}>
              Open in StrengthLens App
            </button>

            <div style={styles.divider}>
              <span style={styles.dividerText}>Don't have the app?</span>
            </div>

            <div style={styles.storeButtons}>
              <a
                href="https://apps.apple.com/app/your-app-id"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.storeButton}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <span>App Store</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.allinonefitness.fitnesstracker"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.storeButton}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span>Google Play</span>
              </a>
            </div>

            <p style={styles.helpText}>
              If you have the app installed, try opening this page in Safari (iOS) or Chrome (Android).
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #070B18 0%, #0B1E3F 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    maxWidth: '480px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '40px',
    textAlign: 'center' as const,
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#F4F7FF',
    marginBottom: '12px',
    margin: '0 0 12px 0',
  },
  description: {
    fontSize: '16px',
    color: '#94A3B8',
    lineHeight: '1.5',
    marginBottom: '32px',
    margin: '0 0 32px 0',
  },
  spinner: {
    width: '40px',
    height: '40px',
    margin: '0 auto',
    border: '4px solid rgba(45, 107, 255, 0.2)',
    borderTop: '4px solid #2D6BFF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  button: {
    display: 'inline-block',
    width: '100%',
    padding: '14px 24px',
    backgroundColor: '#2D6BFF',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '32px 0',
    gap: '16px',
  },
  dividerText: {
    color: '#64748B',
    fontSize: '14px',
    whiteSpace: 'nowrap' as const,
  },
  storeButtons: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
  },
  storeButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#F4F7FF',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  helpText: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: '1.5',
    margin: '0',
  },
};
