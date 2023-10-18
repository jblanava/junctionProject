import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="This is what our app does"
    description="This is the next disruptive mind-blowing idea that will win all."
  >
    <VerticalFeatureRow
      title="Feature 1"
      description="Feature 1 description."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Feature 2"
      description="Feature 2 description.."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Feature 3"
      description="Feature 1 description.."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
