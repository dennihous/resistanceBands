import React from 'react';
import ResistanceBand from './ResistanceBand';

type ResistanceBandListProps = {
  bands: any;
}

export default function ResistanceBandList({ bands }: ResistanceBandListProps) {
  return (
    <div className="resistance-band-list-container">
        {bands.bands.map((band: any, index: number) => (
          <div key={index} className="resistance-band-item">
            <ResistanceBand
              id={band.id}
              name={band.name}
              imageUrl={band.imageUrl}
              price={band.price}
            />
          </div>
        ))}
      </div>
  )
}