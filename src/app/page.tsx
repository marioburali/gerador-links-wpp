import Flow from '../components/Flow';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Flow />
      <div className="mt-6 flex justify-center">
        <Footer />
      </div>
    </main>
  );
}
