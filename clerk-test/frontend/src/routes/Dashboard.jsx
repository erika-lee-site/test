import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function DashboardPage() {

  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page.</p>

      <ul>
        <li><Link to="/dashboard/invoices">Invoices</Link></li>
        <li><Link to="/">Return to index</Link></li>
      </ul>
    </>
  );
}