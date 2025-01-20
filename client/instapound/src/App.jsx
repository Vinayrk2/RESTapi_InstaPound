import Header from './components/Header';
import { Stories } from './components/Stories';
import { Feed } from './components/Feed';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[60px]">
        <Stories />
        <Feed />
      </main>
    </div>
  );
}

