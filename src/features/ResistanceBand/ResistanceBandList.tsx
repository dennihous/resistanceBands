import React from 'react';
import ResistanceBand from './ResistanceBand';

type ResistanceBandListProps = {
  bands: any
}

export default function ResistanceBandList({ bands }: ResistanceBandListProps) {
  return (
    <div className="resistance-band-list-container">
        {bands.map((band: any, index: number) => (
          <div key={index} className="resistance-band-item">
            <ResistanceBand
              name={band.name}
              imageUrl={band.imageUrl}
              price={band.price}
            />
          </div>
        ))}
      </div>
  )
}