import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Inventory Management
      </h1>
      <ul>
        <li>Raw Materials Inventory: Track inventory levels of apples, yeast, additives, and other raw materials.</li>
        <li>Finished Product Inventory: Manage inventory of finished cider, including different types and packaging formats.</li>
        <li>Suppliers Management: Keep a record of suppliers and manage orders and deliveries.</li>
      </ul>
      <p>
      </p>
    </main>
  );
  }