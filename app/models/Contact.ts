export interface Contact {
  id: string;
  type: 'client' | 'fournisseur';
  nom: string;
  telephone: string;
  email: string;
  adresse: string;
  solde: number;
  credit_max: number;
  delai_paiement: number;
  statut: 'actif' | 'inactif';
  date_creation: Date;
}
