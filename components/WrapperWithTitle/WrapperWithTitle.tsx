interface WrapperWithTitleProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const WrapperWithTitle: React.FC<WrapperWithTitleProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center gap-8">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-700 text-center sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-xl text-gray-600 text-center">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default WrapperWithTitle;
