import { HelmetProvider, Helmet } from "react-helmet-async";
import { useJsApiLoader } from "@react-google-maps/api";

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAvCqgbtaS_yPdo3ScD7fhD2NeZ2K4ov40',
    libraries: ['places'],
  })
  if (loadError) return <div></div>;
  if (!isLoaded) return <div></div>;

  return <HelmetProvider>{children}</HelmetProvider>;
};

export default function PageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
