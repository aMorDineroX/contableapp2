'use client';

import { useState } from 'react';
import { Card, Title, Text, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from "@tremor/react";

export default function EcrituresPage() {
  const [entries] = useState([
    { date: '2024-02-20', compte: '411000', debit: 50000, credit: 0, libelle: 'Facture client' },
    { date: '2024-02-20', compte: '707000', debit: 0, credit: 50000, libelle: 'Vente de marchandises' },
  ]);

  return (
    <div className="p-4 md:p-10">
      <Card>
        <Title>Journal des écritures</Title>
        <Table className="mt-6">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Compte</TableHeaderCell>
              <TableHeaderCell>Débit</TableHeaderCell>
              <TableHeaderCell>Crédit</TableHeaderCell>
              <TableHeaderCell>Libellé</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.compte}</TableCell>
                <TableCell>{entry.debit}</TableCell>
                <TableCell>{entry.credit}</TableCell>
                <TableCell>{entry.libelle}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
