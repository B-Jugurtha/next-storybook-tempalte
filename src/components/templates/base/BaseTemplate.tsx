// import './BaseTemplate.scss';

export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="base-template">{sampleTextProp}</div>;
};

export default BaseTemplate;
