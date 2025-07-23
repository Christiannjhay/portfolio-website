export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white font-GeomLight text-xs">
      <h1>© CHRISTIAN SUGAROL {currentYear}.</h1>
    </div>
  );
}