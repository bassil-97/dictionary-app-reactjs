import React from "react";
import {
  SelectedWordHeader,
  SelectedWordContainer,
  SelectedWordBody,
  SelectedWordSection,
  SectionTitle,
  ListTitle,
  List,
  SynonymsTitle,
  SynonymsList,
  Divider,
} from "./SelectedWordViewStyles";
import capitalizeFirstLetter from "../../../utilities/capitalizeFirstLetter";

import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function SelectedWordView({ selectedWord }) {
  const filterAudioLinks = () => {
    return selectedWord?.phonetics?.filter((el) => el.audio !== "");
  };

  return (
    <SelectedWordContainer>
      <SelectedWordHeader>
        <div>
          <h1>{capitalizeFirstLetter(selectedWord?.word)}</h1>
          <small>{selectedWord?.phonetic}</small>
        </div>
        <AudioPlayer audioSrc={filterAudioLinks()} />
      </SelectedWordHeader>
      <SelectedWordBody>
        {selectedWord?.meanings[0] && (
          <SelectedWordSection>
            <SectionTitle>noun</SectionTitle>
            <ListTitle>meaning</ListTitle>
            <List>
              {selectedWord?.meanings[0]?.definitions.map((def, index) => (
                <li key={index}>{def.definition}</li>
              ))}
            </List>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <SynonymsTitle>synonyms</SynonymsTitle>
              <SynonymsList>
                {selectedWord?.meanings[0]?.synonyms?.map((el, index) => (
                  <h2 key={index}>{el}</h2>
                ))}
              </SynonymsList>
            </div>
          </SelectedWordSection>
        )}

        {selectedWord?.meanings[1] && (
          <SelectedWordSection>
            <SectionTitle>verb</SectionTitle>
            <ListTitle>meaning</ListTitle>
            <List>
              {selectedWord?.meanings[1]?.definitions.map((def, index) => (
                <li key={index}>{def.definition}</li>
              ))}
            </List>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <SynonymsTitle>synonyms</SynonymsTitle>
              <SynonymsList>
                {selectedWord?.meanings[1]?.synonyms?.map((el, index) => (
                  <h2 key={index}>{el}</h2>
                ))}
              </SynonymsList>
            </div>
          </SelectedWordSection>
        )}
        <Divider />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "15px",
          }}
        >
          <h2>Source</h2>
          <a href={selectedWord?.sourceUrls} target="_blank" rel="noreferrer">
            {selectedWord?.sourceUrls}
          </a>
        </div>
      </SelectedWordBody>
    </SelectedWordContainer>
  );
}
