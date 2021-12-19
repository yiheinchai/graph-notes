import { useState } from "react";
import ListText from "./components/ListText";

const App = () => {
  // const [noteData, setNoteData] = useState(JSON.stringify(exampleObject2));

  // console.log("sample html", sampleHTML)

  // const updateNotes = (event) => {
  //   event.preventDefault();
  //   console.log("Notes updated!");
  //   setNoteData((previousObject) => {

  //   })
  // };

  return (
    <div>
      <h3>Notes</h3>
      {objectExtractor(data)}
      {/* <form onSubmit={updateNotes}>
        <input placeholder="write your notes here"></input>
        <input placeholder="level"></input>
      </form> */}
      {/* {sampleHTML} */}
    </div>
  );
};

export default App;

const objectExtractor = (object) => {
  console.log(
    object?.children?.length,
    !object?.children?.length,
    object?.children?.length === 0 || !object?.children?.length
  );
  if (object?.children?.length === 0 || !object?.children?.length)
    return <ListText expandable={false} text={"-" + " " + object.text} />;
  return (
    <ListText expandable={true} text={object.text}>
      {object.children.map((child) => {
        return objectExtractor(child);
      })}
    </ListText>
  );
};

const data = {
  text: "Immunology",
  children: [
    {
      text: "[004] Cells and Tissues of the Immune System",
      children: [
        {
          text: "Learning Outcomes",
          children: [
            {
              text: "To know the major cell types and organs of the immune system",
              children: [],
            },
            {
              text: "To understand what distinguishes the anatomy of the immune system from that of other physiological systems ",
              children: [],
            },
            {
              text: "To understand the broad developmental pathways of the cells of the immune system",
              children: [],
            },
            {
              text: "To know the major types of immune cells and what they do ",
              children: [],
            },
            {
              text: "To understand how different stages of T-cell & B-cell development and differentiation relate to different anatomical/histological\ncompartments",
              children: [],
            },
            {
              text: "To know the migratory pathways of the major cell types which comprise the immune system.",
              children: [],
            },
          ],
        },
        {
          text: "General Stuff",
          children: [
            {
              text: "Classification of the Immune System",
              children: [
                {
                  text: "Understanding",
                  children: [
                    {
                      text: "Immune system is ubiquitous (spread throughout the entire body) and cannot be identified by a geographic location on the body",
                      children: [],
                    },
                    {
                      text: "Hence, classification of the cells of the immune system is based on the progenitor (less differentiated cells)",
                      children: [],
                    },
                    {
                      text: "All cells in the immune system are derived from a single haematopoietic stem cell (stem cells that create the haematopoetic system)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Challenges arising from haemopoetic system (widely distributed and decentralized)",
              children: [],
            },
            {
              text: " ",
              children: [],
            },
            {
              text: "Geography of the Immune System",
              children: [
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          text: "Key Cellular Players",
          children: [
            {
              text: "Structure of Notes",
              children: [
                {
                  text: "Structure",
                  children: [],
                },
                {
                  text: "Function",
                  children: [],
                },
                {
                  text: "Location (geography)",
                  children: [],
                },
              ],
            },
            {
              text: "Overview of Key Cellular Players",
              children: [
                {
                  text: "Innate",
                  children: [
                    {
                      text: "Granulocyte",
                      children: [],
                    },
                    {
                      text: "Macrophage",
                      children: [],
                    },
                    {
                      text: "Dendritic (hybrid)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Adaptive",
                  children: [
                    {
                      text: "T cell",
                      children: [],
                    },
                    {
                      text: "B cells",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Borderlands",
                  children: [
                    {
                      text: "Innate lymphoid cells",
                      children: [],
                    },
                    {
                      text: "Natural Killer cells",
                      children: [],
                    },
                    {
                      text: "Natural Killer T cells",
                      children: [],
                    },
                    {
                      text: "γδ T cells",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Granulocytes (Innate)",
              children: [
                {
                  text: "Types",
                  children: [
                    {
                      text: "Neutrophils",
                      children: [],
                    },
                    {
                      text: "Eosinophils",
                      children: [],
                    },
                    {
                      text: "Basophils",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Location",
                  children: [
                    {
                      text: "Found in the blood",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Properties",
                  children: [
                    {
                      text: "Short lived - lifecycle",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Function (General)",
                  children: [
                    {
                      text: "Rapid defense against infection by phagocytosis and killing",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Structure and Function",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                    {
                      text: " ",
                      children: [],
                    },
                  ],
                },
                {
                  text: "General Mechanism",
                  children: [
                    {
                      text: "Recruited from blood to tissue during inflammation",
                      children: [],
                    },
                    {
                      text: "Produces many cytotoxic mediators (reactive oxygen species / bleach)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Detailed Mechanism (no infection)",
                  children: [
                    {
                      text: "Created in the bone marrow, circulates the entire circulatory system",
                      children: [],
                    },
                    {
                      text: "If no pathogens are detected, it dies within 24 hours",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Detailed Mechanism (infection)",
                  children: [
                    {
                      text: "Created in the bone marrow, circulates the entire circulatory system",
                      children: [],
                    },
                    {
                      text: "Human experiences a cut",
                      children: [],
                    },
                    {
                      text: "Endothelial cells of the blood vessels release chemicals",
                      children: [],
                    },
                    {
                      text: "Chemicals attracts neutrophils, causing them to migrate to the site",
                      children: [],
                    },
                    {
                      text: "At the site, the neutrophils detect the stickiness of the endothelial cell by detect the change in its own cell wall",
                      children: [],
                    },
                    {
                      text: "If there is stickiness, neutrophils will undergo extravasation and flatten itself to squeeze through the endothelial wall to exit the blood\nvessel and move into the site of infection",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Macrophages (Innate)",
              children: [
                {
                  text: "Types",
                  children: [
                    {
                      text: "Monocytes - blood (precursor)",
                      children: [],
                    },
                    {
                      text: "Macrophages - tissues",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Location",
                  children: [
                    {
                      text: "Found in the tissues",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Function",
                  children: [
                    {
                      text: "Phagocytose cell debris in tissue",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Properties",
                  children: [
                    {
                      text: "Long lived",
                      children: [],
                    },
                    {
                      text: "Every tissue has its own population of macrophages (Kuppfer cells - liver)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Function (General)",
                  children: [
                    {
                      text: "Provides second wave of defense (when granulocytes calls for backup)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Structure and Function",
                  children: [],
                },
              ],
            },
            {
              text: "Mast Cells",
              children: [
                {
                  text: "Properties",
                  children: [
                    {
                      text: "Contains many granules ",
                      children: [],
                    },
                    {
                      text: "Contains Fc Receptors",
                      children: [],
                    },
                    {
                      text: "Contains Fc receptor for IgE",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Location",
                  children: [
                    {
                      text: "Found in tissues (predominantly in skin and mucosal tissues), line the surface of the body",
                      children: [],
                    },
                    {
                      text: "Rarely found in blood",
                      children: [],
                    },
                    {
                      text: "Precursors found in blood",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Lymphocytes (adaptive)",
              children: [
                {
                  text: "Types",
                  children: [
                    {
                      text: "T cell (thymus)",
                      children: [],
                    },
                    {
                      text: "B cell (bone marrow / bursa)",
                      children: [],
                    },
                    {
                      text: "T and B cells are histologically indistinguishable",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Properties",
                  children: [
                    {
                      text: "Small",
                      children: [],
                    },
                    {
                      text: "Very long lived (10-20 years if never activated)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Location",
                  children: [
                    {
                      text: "Found in blood",
                      children: [],
                    },
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Movement",
                  children: [
                    {
                      text: "Fighting infection",
                      children: [
                        {
                          text: "-        Lymphocytes leaves the bloodstream at the site of the infected\ntissue[YHC1] ",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Not fighting infection",
                      children: [
                        {
                          text: "Lymphocytes leaves the bloodstream via the lymph node and check for compatible antigens",
                          children: [],
                        },
                        {
                          text: "Searches the lymph node because it is the site where all immune responses begin (with the lymphocyte recognizes its antigen target at the lymph\nnode)",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Diagram",
                      children: [
                        {
                          text: "",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: "Prevalence",
                  children: [
                    {
                      text: "Consist of 25% of circulating white blood cells",
                      children: [
                        {
                          text: "Lymphocytes: 25%",
                          children: [],
                        },
                        {
                          text: "Monocytes: 5%",
                          children: [],
                        },
                        {
                          text: "Granulocytes: 70%",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Make up 2% of total blood",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism of Activation",
                  children: [
                    {
                      text: "B cells upon contact with antigens, will differentiate significantly to form plasma cells",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Dendritic cell (hybrid - innate / adaptive)",
              children: [
                {
                  text: "Location",
                  children: [
                    {
                      text: "Located in tissues",
                      children: [],
                    },
                    {
                      text: "More prevalent in locations where infection is most likely to occur",
                      children: [
                        {
                          text: "Lung",
                          children: [],
                        },
                        {
                          text: "Skin",
                          children: [],
                        },
                        {
                          text: "Gut",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: "Function",
                  children: [
                    {
                      text: "Sampling antigen from the environment and carry it to the lymph nodes (for the lymphocytes to detect)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism",
                  children: [
                    {
                      text: "Dendritic cells extend their arms out searching for pathogens",
                      children: [],
                    },
                    {
                      text: "The arms are constantly retracting and extending, going in and out looking for antigens",
                      children: [],
                    },
                    {
                      text: "As soon as the dendritic cells finds an antigen, the dendritic cell retracts its arms, swims down the lymphatic vessels, and finds the nearest\nlymph nodes",
                      children: [],
                    },
                    {
                      text: "The dendritic cells then extends its arms again and wait for a lymphocyte to arrive at the lymph node",
                      children: [],
                    },
                    {
                      text: "Once the lymphocyte and the dendritic cell meets, the immune response starts",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "[007] Innate Immunity",
      children: [
        {
          text: "General Stuff",
          children: [
            {
              text: "Commensal bacteria",
              children: [
                {
                  text: "1.Bacteria exist on the skin and do not cause infection unless they enter the tissues",
                  children: [],
                },
                {
                  text: "2.Co-existence plays a positive role in maintaining health",
                  children: [],
                },
              ],
            },
            {
              text: "First Line of Defence",
              children: [
                {
                  text: "1.Components",
                  children: [
                    {
                      text: "Skin",
                      children: [
                        {
                          text: "Keeps microbes out",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Mucus",
                      children: [
                        {
                          text: "Skin in lungs, digestive and respiratory tract are thinner and hence easier for microbes to get in",
                          children: [],
                        },
                        {
                          text: "Mucus provides a further physical barrier in these locations",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: "2.Process",
                  children: [
                    {
                      text: "Once the first line of defence is breached, the innate immune system activates",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Types of Immunity",
              children: [
                {
                  text: "1.Innate",
                  children: [
                    {
                      text: "Purpose: Neutralizes microbes once they get past first barriers (skin)",
                      children: [],
                    },
                    {
                      text: "Definition: All components of the immune system that are not lymphocytes",
                      children: [],
                    },
                  ],
                },
                {
                  text: "2.Adaptive",
                  children: [],
                },
              ],
            },
            {
              text: "Overview of Innate Immunity",
              children: [
                {
                  text: "1.Recognition",
                  children: [],
                },
                {
                  text: "2.Effector Mechanisms",
                  children: [],
                },
                {
                  text: "3.Amplification and Regulation",
                  children: [],
                },
                {
                  text: "4.",
                  children: [],
                },
              ],
            },
            {
              text: " ",
              children: [],
            },
          ],
        },
        {
          text: "Recognition",
          children: [
            {
              text: "Components",
              children: [
                {
                  text: "Receptor (lock) - Pattern Recognition Receptors (PRR)",
                  children: [],
                },
                {
                  text: "Ligand (key) - Pathogen Associated Molecular Patterns (PAMPs)",
                  children: [],
                },
              ],
            },
            {
              text: "Properties",
              children: [
                {
                  text: "Highly specific - small molecular changes can cause recognition change",
                  children: [],
                },
                {
                  text: "Small scale - size of the key is only a few amino acids",
                  children: [],
                },
              ],
            },
            {
              text: "Example: Toll-like Receptor (TLR) ligand recognition",
              children: [
                {
                  text: "Properties",
                  children: [
                    {
                      text: "Horse-shoe shape which can bind to PAMPs which are associated with a particular microorganism",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "-",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Cells",
                  children: [
                    {
                      text: "Mainly expressed by antigen presenting cells such as dendritic cells and macrophages, but they are also found in other immune and non-immune\ncells",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Locations",
                  children: [
                    {
                      text: "Extracellular (on plasma membrane)",
                      children: [],
                    },
                    {
                      text: "Endosomal (in vesicles)",
                      children: [],
                    },
                    {
                      text: "Cytosolic (in cytoplasm)",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Function",
              children: [
                {
                  text: "Problem",
                  children: [
                    {
                      text: "Need to recognize and respond to any microbe, virus, bacteria or multicellular parasite",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Solution",
                  children: [
                    {
                      text: "-  Continuously evolve PRR that currently recognizes PAMPs[YHC2] ",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Mechanism",
              children: [
                {
                  text: "Upon binding of PAMPs to PRR, the innate immune system is activated",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          text: "Effector Mechanisms",
          children: [
            {
              text: "Main Effector Mechanisms",
              children: [
                {
                  text: "Phagocytosis and intracellular killing",
                  children: [],
                },
                {
                  text: "Complement - Extracellular killing ",
                  children: [],
                },
                {
                  text: "Interferon and restriction factors (prevent viral replication)",
                  children: [],
                },
              ],
            },
            {
              text: "Complement",
              children: [
                {
                  text: "Components",
                  children: [
                    {
                      text: "20-30 different proteins in blood",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Properties",
                  children: [
                    {
                      text: "Act in a proteolytic amplification cascade system",
                      children: [],
                    },
                    {
                      text: "Fast (startup to fully active: seconds)",
                      children: [],
                    },
                    {
                      text: "Highly regulated (50% of the complementary system)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism",
                  children: [
                    {
                      text: "C3 is cleaved into C3a and C3b, enabling the function of the complement system",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Activation Pathways",
                  children: [
                    {
                      text: "Alternative",
                      children: [],
                    },
                    {
                      text: "Classical",
                      children: [],
                    },
                    {
                      text: "Lectin",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Function",
                  children: [
                    {
                      text: "Opsonization - Phagocytosis and intracellular killing",
                      children: [],
                    },
                    {
                      text: "Lysis - Extracellular killing ",
                      children: [],
                    },
                    {
                      text: "Inflammation",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diagram",
                  children: [
                    {
                      text: "",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Function 1: Opsonisation",
              children: [
                {
                  text: "Goal",
                  children: [
                    {
                      text: "Make the bacteria more attractive to phagocytes",
                      children: [],
                    },
                    {
                      text: "Cover the bacteria with a (protein) which makes it easier to phagocytosis",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism: Activation",
                  children: [
                    {
                      text: "Bacteria enters the bloodstream, activating the complement system",
                      children: [],
                    },
                    {
                      text: "C3b is released and binds to the surface of the bacteria",
                      children: [],
                    },
                    {
                      text: "All phagocytes (neutrophils, macrophages) have cell surface receptors that recognize C3b",
                      children: [],
                    },
                    {
                      text: "Neutrophil comes and recognizes the C3b and phagocytose the bacteria",
                      children: [],
                    },
                    {
                      text: "C3b activates other proteins. C9",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism: Non-activation",
                  children: [
                    {
                      text: "C3b is released and does not bind to the surface of any bacteria (no bacteria present)",
                      children: [],
                    },
                    {
                      text: "C3b will be deactivated and stop binding to anything",
                      children: [],
                    },
                    {
                      text: "In a few seconds, C3b will be further degraded and removed from circulation",
                      children: [],
                    },
                    {
                      text: "This provides basic regulation of the complement system",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Function 2: Lysis",
              children: [
                {
                  text: "Goal",
                  children: [
                    {
                      text: "Direct killing of bacteria",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism",
                  children: [
                    {
                      text: "C3b activates other complements, C5, C9",
                      children: [],
                    },
                    {
                      text: "C9 combines to form a terminal attack complex / membrane attack complex",
                      children: [],
                    },
                    {
                      text: "C9 causes the formation of pores in the plasma membrane of the bacteria, resulting in cell lysis and bacterial cell death",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Function 3: Inflammation",
              children: [
                {
                  text: "Goal",
                  children: [
                    {
                      text: "Attract other immune cells to the site of the infection (neutrophils)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism",
                  children: [
                    {
                      text: "During the activation of the complement system, C3 is cleaved in to C3a and C3b",
                      children: [],
                    },
                    {
                      text: "C3b cleaves C5 into C5a and C5b",
                      children: [],
                    },
                    {
                      text: "-  C5a and C3a leads to the movement of neutrophils to the site of\ninfection[YHC3] ",
                      children: [],
                    },
                    {
                      text: "Movement of millions of granulocytes (neutrophils) results in an inflammatory reaction",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Activation 1: Alternative Pathway",
              children: [
                {
                  text: "Microbial cell walls results in the formation of C3bBb",
                  children: [],
                },
              ],
            },
            {
              text: "Activation 2: Classical Pathway",
              children: [
                {
                  text: "Antibody bound to microbe results in the activation of C1q => C1r => C1s",
                  children: [],
                },
                {
                  text: "This eventually lead to the activation of C4b2a",
                  children: [],
                },
              ],
            },
            {
              text: "Activation 3: Lectin Pathway",
              children: [
                {
                  text: "PRR (manitose binding protein) binds to PAMPs (manitose - fungi)",
                  children: [],
                },
                {
                  text: "PRR activates other proteins which results in the activation of C4b2a",
                  children: [],
                },
              ],
            },
            {
              text: "Activation (Combined)",
              children: [
                {
                  text: "-C3bBb and C4b2a cleaves C3 into C3a and C3b, activating the complement system",
                  children: [],
                },
                {
                  text: "",
                  children: [],
                },
              ],
            },
            {
              text: " ",
              children: [],
            },
            {
              text: "Interferon",
              children: [
                {
                  text: "Background",
                  children: [
                    {
                      text: "Problem",
                      children: [
                        {
                          text: "Viruses enter the cells and hence are protected from the complement system",
                          children: [],
                        },
                        {
                          text: "Interferon aims to bridge the gap",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Solution",
                      children: [
                        {
                          text: "Antiviral proteins in the cell (restriction factors) restrict the ability of viruses to divide",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  text: "Definition",
                  children: [
                    {
                      text: "Interferon - proteins that interferes with the replication of viruses.",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism",
                  children: [
                    {
                      text: "Virus enters the cell cytoplasm and triggers the cell innate recognition receptors",
                      children: [],
                    },
                    {
                      text: "This causes the cell to produce interferons.",
                      children: [],
                    },
                    {
                      text: "Interferons spreads to the neighboring cells",
                      children: [],
                    },
                    {
                      text: "With the presence of interferons, 1000 times more viruses are required to replicate within the cells. However, the viral resistant state\nprevents the cell from performing many of the normal cellular activities",
                      children: [],
                    },
                    {
                      text: "This enables neighboring cells to become resistant to viral infection",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: "Inflammation",
              children: [
                {
                  text: "Process",
                  children: [
                    {
                      text: "The immune system overreacts to a particular challenge",
                      children: [],
                    },
                    {
                      text: "This overreaction results to the symptoms of the disease",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Classical signs of inflammation",
                  children: [
                    {
                      text: "Cator (heat)",
                      children: [],
                    },
                    {
                      text: "Rubor (redness)",
                      children: [],
                    },
                    {
                      text: "Tumor (swelling)",
                      children: [],
                    },
                    {
                      text: "Dolor (pain)",
                      children: [],
                    },
                    {
                      text: "Function Laesa (loss of function)",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Mechanism of Inflammation",
                  children: [
                    {
                      text: "Infection results in the recruitment of cells (neutrophils) and serum which contains proteins required for the complement system",
                      children: [],
                    },
                    {
                      text: "To aid in recruitment, vasodilation occurs, enabling blood vessels to become bigger and hence increase the number of cells that can travel to\ninfection site. Vasodilation results in redness in the skin.",
                      children: [],
                    },
                    {
                      text: "To aid in recruitment, vasopermeability is increased, enabling the blood vessels to become leaky to that the components like neutrophils",
                      children: [],
                    },
                    {
                      text: "Neutrophils that arrive will release toxic mediators to kill the pathogen. Mediators results in the damage of surrounding cells and damages the\nneighboring nerve endings. This causing tissue necrosis pain.",
                      children: [],
                    },
                    {
                      text: "Due to the number of neutrophils that flood the infection site, the middle of the infection site runs out of oxygen and turns into a hypoxic\nstate. This leads to the inability of tissue to function and hence tissue\ndeath.",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Inflammatory Mediators - Cytokines (hormones of the immune system)",
                  children: [
                    {
                      text: "Definition",
                      children: [
                        {
                          text: "Act on the cells of the immune system to stimulate them to produce an immune response",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Types",
                      children: [
                        {
                          text: "Cytokines",
                          children: [],
                        },
                        {
                          text: "Chemokines",
                          children: [],
                        },
                      ],
                    },
                    {
                      text: "Examples and Function",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: " ",
              children: [],
            },
            {
              text: "Acute Phase Response",
              children: [
                {
                  text: "Interleukin 6 stimulates the up regulation of proteins in the blood during the acute phase response",
                  children: [],
                },
                {
                  text: "Clinicians measures the presence of these proteins as a marker of inflammation",
                  children: [],
                },
              ],
            },
            {
              text: "Chronic Inflammation",
              children: [
                {
                  text: "Process",
                  children: [
                    {
                      text: "Chronic activation of macrophages results in the further damage of tissues",
                      children: [],
                    },
                    {
                      text: "This may lead to aging",
                      children: [],
                    },
                  ],
                },
                {
                  text: "Diseases",
                  children: [
                    {
                      text: "Arthritis (joints)",
                      children: [],
                    },
                    {
                      text: "Atherosclerosis",
                      children: [],
                    },
                    {
                      text: "Diabetes",
                      children: [],
                    },
                    {
                      text: "Dementia",
                      children: [],
                    },
                    {
                      text: "Cancer",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              text: " ",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
