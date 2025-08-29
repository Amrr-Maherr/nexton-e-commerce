import { ClipLoader } from "react-spinners";

export default function Loader({ loading }) {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <ClipLoader color="#111827" loading={loading} size={80} />
    </div>
  );
}
