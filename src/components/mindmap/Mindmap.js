import ListText from "../ListText";

const Mindmap = ({ fileJson }) => {
  const objectExtractor = (object, mindMapMode) => {
    if (object?.children?.length === 0 || !object?.children?.length)
      return <ListText mindMapMode={true} expandable={false} text={object.text} />;
    return (
      <ListText mindMapMode={true} expandable={true} text={object.text}>
        {object.children.map((child) => {
          return objectExtractor(child, mindMapMode);
        })}
      </ListText>
    );
  };

  return <>{objectExtractor(fileJson)}</>;
};

export default Mindmap;
