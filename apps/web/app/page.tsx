import { Button, Card } from '@qazaqmura/ui';

export default function HomePage() {
  return (
    <main
      style={{
        padding: '60px',
      }}
    >
      <h1
        style={{
          fontSize: '56px',
          marginBottom: '16px',
        }}
      >
        Qazaq Mura
      </h1>

      <p
        style={{
          maxWidth: '700px',
          color: '#585D66',
          marginBottom: '32px',
        }}
      >
        Цифровая платформа по сохранению и популяризации
        культурного наследия Казахстана.
      </p>

      <Card>
        <h2>Добро пожаловать</h2>

        <p>
          Первая версия дизайн-системы успешно подключена.
        </p>

        <Button>
          Исследовать наследие
        </Button>
      </Card>
    </main>
  );
}