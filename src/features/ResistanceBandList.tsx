import React from 'react';
import ResistanceBand from './ResistanceBand';

type ResistanceBandListProps = {
  bands: any
}

export default function ResistanceBandList({ bands }: ResistanceBandListProps) {
  return (
    <div className="resistance-band-list">
        {bands.map((band: any, index: number) => (
          <ResistanceBand
            key={index}
            name={band.name}
            imageUrl={band.imageUrl}
          />
        ))}
      </div>
  )
}