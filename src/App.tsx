import AppContent from './AppContent';
import AppProvider from './AppProvider';

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
