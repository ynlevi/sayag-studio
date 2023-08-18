export default function NotFound() {
  const triggerClick = () => console.log("trigger");
  return (
    <div className=" h-90vh bg-red-200">
      <h1 className="text-4xl">404</h1>
      <h2 className="text-2xl">page not found</h2>
    </div>
  );
}
