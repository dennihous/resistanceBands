import React from 'react';
import Button from 'react-bootstrap/Button';
import './Band.scss'
import bandsData from '../../../bandsData.json'
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const selectedBand = await getContact(params.bandId);
  return { selectedBand }
}

export default function Band() {
  const { selectedBand } = useLoaderData();
  const index = Number(selectedBand) -1
  return (
    <div className="band-page">
      <div className="band-details">
        <img src={bandsData.bands[index].imageUrl} alt="Resistance Band" className="resistance-band-image-page" />
        <div className="details">
          <h2>{bandsData.bands[index].name}</h2>
          <p>
            Write some details about the {bandsData.bands[index].name} here.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla ac justo vel urna cursus dictum in ac ex.
          </p>
        </div>
      </div>
      <div className="add-to-cart-button">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}