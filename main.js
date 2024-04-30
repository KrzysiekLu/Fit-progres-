// Pobierz dane kroków z Google Fit API
async function fetchFitData() {
    const accessToken = '995752855987-6tlebufls2leskh6vpnqn2gmfp9sl8fk.apps.googleusercontent.com'; // Tutaj należy wstawić token dostępowy
  
    try {
      const response = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.step_count.delta:com.google.android.gms:estimated_steps/datasets/0-1000000000000', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Dane kroków:', data);
      } else {
        console.error('Wystąpił błąd podczas pobierania danych:', response.statusText);
      }
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  }
  
  fetchFitData();
  