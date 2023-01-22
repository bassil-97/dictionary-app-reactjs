import React, { useState } from "react";
import { useHttpClient } from "../../hooks/useHttp";

import { SelectedWordWrapper, Button } from "./SelectedWordStyles";
import Searchbar from "../Searchbar/Searchbar";
import SelectedWordView from "./SelectedWordView/SelectedWordView";
import LoadingSpinner from "../../shared/UI/LoadingSpinner";
import ErrorAlert from "../../shared/UI/Alert";

export default function SelectedWord() {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [userInput, setUserInput] = useState("");
  const [wordInfo, setWordInfo] = useState();

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleFetchSelectedWord = async () => {
    try {
      const responseData = await sendRequest(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
      );
      setWordInfo(responseData[0]);
    } catch (err) {
      setWordInfo(null);
    }
  };

  return (
    <SelectedWordWrapper>
      <Searchbar handleUserInput={handleUserInput} />
      <Button type="button" onClick={handleFetchSelectedWord}>
        Search Word
      </Button>
      {isLoading && <LoadingSpinner />}
      {error && <ErrorAlert message={error} />}
      {!isLoading && wordInfo && <SelectedWordView selectedWord={wordInfo} />}
    </SelectedWordWrapper>
  );
}
