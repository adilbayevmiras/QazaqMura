import { Button } from '@qazaqmura/ui';

export default function HomePage() {
  return (
    <main
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <h1>Qazaq Mura</h1>

      <p>Phase 1 Design System</p>

      <Button>Тестовая кнопка</Button>
    </main>
  );
}