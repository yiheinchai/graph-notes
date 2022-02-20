import ListText from "../../ListText";

const ListRenderer = ({ object, parentObject, mindMapMode, setFileJSONCallback }) => {
  if (object.hierarchyLevel < 1) {
    console.log("root text", object.text, object.hierarchyLevel);
    return (
      <ListText
        mindMapMode={mindMapMode}
        expandable={true}
        text={object.text}
        object={object}
        parentObject={parentObject ? parentObject : object}
        hierarchyLevel={object.hierarchyLevel}
        modifyParentObject={setFileJSONCallback}
      >
        {object.children.map((child) => {
          return <ListRenderer child={child} object={object} />;
        })}
      </ListText>
    );
  }
  if (object?.children?.length === 0 || !object?.children?.length)
    return (
      <ListText
        mindMapMode={mindMapMode}
        expandable={false}
        text={object.text}
        object={object}
        parentObject={parentObject}
        hierarchyLevel={object.hierarchyLevel}
      />
    );
  return (
    <ListText
      mindMapMode={mindMapMode}
      expandable={true}
      text={object.text}
      object={object}
      parentObject={parentObject}
      hierarchyLevel={object.hierarchyLevel}
    >
      {object.children.map((child) => {
        return <ListRenderer child={child} object={object} />;
      })}
    </ListText>
  );
};

export default ListRenderer;
