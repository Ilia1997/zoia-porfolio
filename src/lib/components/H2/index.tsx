export const H2 = (props: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl font-semibold text-center text-gray-800">
      {props.children}
    </h2>
  );
};
