import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recipie Creation and Editing
      </h1>
      <ul>
        <li>Ingredient List: Detailed list of ingredients with quantities.</li>
        <li>Instructions: Step-by-step instructions for the cider-making process.</li>
        <li>Batch Size: Specify the batch size for the recipe.</li>
      </ul>
      <p>
      </p>
    </main>
  );
  }