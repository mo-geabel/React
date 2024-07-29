export default function Fruit({ name, price, emoji, soldout }) {
  return (
    <div>
      <ul>
        {/* {emoji} {price} $ {name} */}
        {soldout ? (
          <li key={name}>
            {emoji} {name} $ {price}
          </li>
        ) : (
          <li key={name}>
            {emoji} {name} $ {price} soldout
          </li>
        )}
      </ul>
    </div>
  );
}
