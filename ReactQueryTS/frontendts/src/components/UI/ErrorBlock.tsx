export interface ErrorBlockProps {
  title:string;
  message:string;
}

export default function ErrorBlock({ title, message }:ErrorBlockProps) {
  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
