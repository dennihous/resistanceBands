import React from 'react';
import Button from 'react-bootstrap/Button';
import './ResistanceBand.scss';

type ResistanceBandProps = {
  name: string;
  imageUrl: string;
}

export default function ResistanceBand({ name, imageUrl }: ResistanceBandProps) {
  return (
    <Button variant="outline-primary" className="resistance-band-button">
      <img src={imageUrl} alt={name} className="resistance-band-image" />
    </Button>
  )
}