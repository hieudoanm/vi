import { Container } from '@mui/material';

export type Feature = { title: string; description: string };

export type FeaturesProps = {
  id: string;
  title: string;
  subtitle: string;
  features: Feature[];
};

const Features: React.FC<FeaturesProps> = ({
  id = '',
  title = '',
  subtitle = '',
  features = [],
}) => {
  return (
    <section id={id} className="py-20">
      <Container>
        <p className="text-center mb-3 text-blue-500 font-medium">{subtitle}</p>
        <h1 className="text-center mx-auto mb-8 text-4xl font-bold">{title}</h1>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map(({ title, description }: Feature) => {
              return (
                <div
                  key={`feature-${title.toLowerCase()}`}
                  className="flex flex-col justify-center items-center my-8"
                >
                  <h2 className="mb-6 text-3xl font-medium">{title}</h2>
                  <p className="text-center">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

Features.displayName = 'Features';
Features.defaultProps = { features: [] };

export default Features;
