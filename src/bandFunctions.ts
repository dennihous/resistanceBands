import bandsData from "../bandsData.json";

export async function getBand(id: number) {
  const bands: any = bandsData.bands;
  const band: any = await bands.find((band: any) => band.id === id);
  return band ?? null;
}
