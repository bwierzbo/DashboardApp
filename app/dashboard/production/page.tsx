import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Production Management
      </h1>
      <ul>
        <li>Batch Tracking: Track each batch of cider from raw materials to finished product.</li>
        <li>Recipe Management: Store and manage cider recipes, including ingredients and quantities.</li>
        <li>Fermentation Monitoring: Monitor and log fermentation parameters such as temperature, pH, and specific gravity.</li>
        <li>Quality Control: Implement quality checks at various stages of production, including tasting notes and lab analysis.</li>
      </ul>
      <p>
      </p>
    </main>
  );
  }