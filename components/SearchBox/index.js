import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Form } from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  function Search(e) {
    e.preventDefault();
    router.push(`/restaurants?q=${query}`)
  }

  return (
    <Form className="d-flex mx-5 my-2" onSubmit={(e)=> Search(e)}>
      <Form.Control
        type="text"
        placeholder="Buscar resaurantes..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-custom-red" type="submit">
        <FaSearch />
      </Button>
    </Form>
  );
}