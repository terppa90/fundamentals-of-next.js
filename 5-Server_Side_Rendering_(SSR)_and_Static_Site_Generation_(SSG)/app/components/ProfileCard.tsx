import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, role, accentColor }) {
  const dynamicHeaderStyle = {
    backgroundColor: accentColor || '#cbd5e1',
  };

  return (
    <div className={styles.cardBase}>
        <div className={styles.imageArea} style={dynamicHeaderStyle}>
            <div className="bg-white p-4 rounded-full shadow-inner text-2xl font-bold text-gray-700">
                {name.charAt(0)}
            </div>
        </div>

        <div className="p-5 bg-white">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-500 text-sm mb-4">{role}</p>
        </div>
    </div>
  );
}