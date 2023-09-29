import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Band from '../features/Bands/Band';

export function loader({ params }: any) {
  const band = params.bandId;
  return { band }
}

export default function BandPage() {
  const { band }: any = useLoaderData();
  const index = Number(band) -1
  return (
    <Band index={index}/>
  );
}