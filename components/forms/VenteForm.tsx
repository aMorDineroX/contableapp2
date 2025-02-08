'use client';

import React from 'react';

interface VenteFormData {
  date: string;
  description: string;
  amount: number;
  category: string;
  client: string;
}

interface VenteFormProps {
  initialData?: Partial<VenteFormData>;
  onSubmit: (data: VenteFormData) => void;
  onCancel: () => void;
}

const VenteForm = ({ initialData, onSubmit, onCancel }: VenteFormProps) => {
  const [formData, setFormData] = React.useState<VenteFormData>({
    date: initialData?.date || new Date().toISOString().split('T')[0],
    description: initialData?.description || '',
    amount: initialData?.amount || 0,
    category: initialData?.category || '',
    client: initialData?.client || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-foreground">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-foreground">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2"
          required
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-foreground">
          Montant (FCFA)
        </label>
        <input
          type="number"
          id="amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2"
          required
          min="0"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-foreground">
          Catégorie
        </label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2"
          required
        >
          <option value="">Sélectionner une catégorie</option>
          <option value="produits">Produits</option>
          <option value="services">Services</option>
          <option value="autres">Autres</option>
        </select>
      </div>

      <div>
        <label htmlFor="client" className="block text-sm font-medium text-foreground">
          Client
        </label>
        <input
          type="text"
          id="client"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
          className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2"
          required
        />
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-foreground bg-muted rounded-md hover:bg-muted/80"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default VenteForm;
