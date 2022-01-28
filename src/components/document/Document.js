import DocumentText from "./DocumentText";

const Document = ({ fileJson }) => {
  const objectExtractor = (object, headerNo = 1) => {
    let headerNumber = headerNo;
    if (object?.children?.length === 0 || !object?.children?.length)
      return (
        <DocumentText
          headerNumber={headerNumber}
          mindMapMode={false}
          expandable={false}
          text={object.text}
        />
      );
    return (
      <DocumentText
        headerNumber={headerNumber}
        mindMapMode={false}
        expandable={true}
        text={object.text}
      >
        {object.children.map((child) => {
          return objectExtractor(child, headerNumber + 1);
        })}
      </DocumentText>
    );
  };

  return <>{objectExtractor(fileJson, 1)}</>;
};

export default Document;
