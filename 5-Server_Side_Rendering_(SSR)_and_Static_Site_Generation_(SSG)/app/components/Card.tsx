export default function Card({ title, content, bgColor }) {
const cardStyle = {
    backgroundColor: bgColor || '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    color: '#333',
    marginBottom: '20px',
    border: '1px solid #ddd',
    margin: '20px 0 20px 0'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p>{content}</p>
    </div>
  );
}