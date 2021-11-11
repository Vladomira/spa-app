export default function DefaultInfo({ data }) {
  return (
    <>
      <ul>
        {data.map(({ title, body, id }) => {
          return (
            <li key={id}>
              <b>{title}</b>
              <p>{body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
