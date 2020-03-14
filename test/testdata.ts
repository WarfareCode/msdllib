export function parseFromString(xmlString: string): Element {
  let parser = new DOMParser();
  let doc = parser.parseFromString(xmlString, "text/xml");
  return doc.documentElement;
}

export const EMPTY_SCENARIO = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MilitaryScenario xmlns="urn:sisostds:scenario:military:data:draft:msdl:1"
                  xmlns:modelID="http://www.sisostds.org/schemas/modelID">
    <ScenarioID>
        <modelID:name>Empty scenario</modelID:name>
        <modelID:type></modelID:type>
        <modelID:version>0</modelID:version>
        <modelID:modificationDate>2012-11-13-05:00</modelID:modificationDate>
        <modelID:securityClassification>Unclassified</modelID:securityClassification>
        <modelID:description>Description</modelID:description>
        <modelID:poc>
            <modelID:pocType>e-mail</modelID:pocType>
            <modelID:pocEmail>test@test.com</modelID:pocEmail>
        </modelID:poc>
    </ScenarioID>
    <Options>
        <MSDLVersion>MSDL Standard Nov 2008</MSDLVersion>
    </Options>
    <Environment>
    </Environment>
    <ForceSides>
    </ForceSides>
    <Organizations>
        <Units></Units>
        <Equipment></Equipment>
    </Organizations>
    <Overlays></Overlays>
    <Installations></Installations>
    <TacticalGraphics></TacticalGraphics>
    <MOOTWGraphics></MOOTWGraphics>
</MilitaryScenario>
`;

export const UNIT_TEMPLATE = `<Unit>
    <ObjectHandle></ObjectHandle>
    <SymbolIdentifier>S-G-U----------</SymbolIdentifier>
    <Name>NEW UNIT</Name>
    <UnitSymbolModifiers></UnitSymbolModifiers>
    <Relations>
        <ForceRelation>
            <ForceRelationChoice></ForceRelationChoice>
            <ForceRelationData></ForceRelationData>
        </ForceRelation>
    </Relations>
</Unit>
`;
