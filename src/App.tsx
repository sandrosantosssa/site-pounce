import { LangProvider } from '@/i18n/LangContext';
import { LaunchGate } from '@/components/LaunchGate';

export default function App() {
  return (
    <LangProvider>
      <LaunchGate />
    </LangProvider>
  );
}
