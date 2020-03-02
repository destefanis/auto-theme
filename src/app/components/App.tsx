import * as React from "react";
import "../styles/figma-plugin-ds.css";
import "../styles/ui.css";
import "../styles/nav.css";
import "../styles/controls.css";
import "../styles/empty-state.css";

import ListItem from "./ListItem";

declare function require(path: string): any;

const App = ({}) => {
  const [selectedLayersLength, setSelectLayersLength] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("themes");
  const [skippedLayers, setSkippedLayers] = React.useState([]);
  const [activeLayer, setActiveLayer] = React.useState(0);

  const onRunApp = React.useCallback(() => {
    const message = "";
    parent.postMessage({ pluginMessage: { type: "run-app", message } }, "*");
  }, []);

  // This tells the controller.ts file to theme
  // our selection from dark to light.
  const themeToLight = React.useCallback(() => {
    const message = "dark-to-light-theme";
    parent.postMessage(
      { pluginMessage: { type: "theme-update", message } },
      "*"
    );
  }, []);

  // This tells the controller.ts file to theme
  // our selection from light to dark.
  const themeToDark = React.useCallback(() => {
    const message = "light-to-dark-theme";
    parent.postMessage(
      { pluginMessage: { type: "theme-update", message } },
      "*"
    );
  }, []);

  function setThemesActive() {
    setActiveTab("themes");
  }

  function setLayersActive() {
    setActiveTab("layers");
  }

  // When the user selects a layer in the skipped layer list.
  const handleLayerSelect = id => {
    setActiveLayer(id);
    parent.postMessage(
      { pluginMessage: { type: "select-layer", id: id } },
      "*"
    );
  };

  React.useEffect(() => {
    onRunApp();

    window.onmessage = event => {
      const { type, message } = event.data.pluginMessage;

      if (type === "selection-updated") {
        let nodeArray = JSON.parse(message);
        setSelectLayersLength(nodeArray.length);
      }

      if (type === "layers-skipped") {
        let unthemedLayers = JSON.parse(message);
        setSkippedLayers(skippedLayers => [
          ...skippedLayers,
          ...unthemedLayers
        ]);
        setActiveTab("layers");
      }
    };
  }, []);

  const listItems = skippedLayers.map(node => (
    <ListItem
      activeLayer={activeLayer}
      onClick={handleLayerSelect}
      key={node.id}
      node={node}
    />
  ));

  return (
    <div className="wrapper">
      {selectedLayersLength === 0 ? (
        <div className="empty-state">
          <div className="empty-state__image">
            <img className="layer-icon" src={require("../assets/layers.svg")} />
          </div>
          <h3 className="type type--pos-large-medium">
            Select a layer to get started.
          </h3>
        </div>
      ) : (
        <React.Fragment>
          <nav className="nav">
            <div
              onClick={setThemesActive}
              className={`section-title ${
                activeTab === "themes" ? "active" : "disabled"
              }`}
            >
              Themes
            </div>
            <div
              onClick={setLayersActive}
              className={`section-title ${
                activeTab === "layers" ? "active" : "disabled"
              }`}
            >
              Skipped Layers{" "}
              {skippedLayers.length !== 0 ? (
                <span className="layer-count"> ({skippedLayers.length})</span>
              ) : null}
            </div>
          </nav>
          {activeTab === "themes" ? (
            <div className="active-state">
              <h3 className="active-state-title type type--pos-large-medium">
                {selectedLayersLength} layers selected for themeing
              </h3>
              <button
                className="button button--primary button-margin-bottom"
                onClick={themeToLight}
              >
                Light Theme
              </button>
              <button
                className="button button--secondary"
                onClick={themeToDark}
              >
                Dark Theme
              </button>
            </div>
          ) : (
            <div className="layer-list-wrapper">
              {skippedLayers.length === 0 ? (
                <div className="active-state">
                  <h3 className="active-state-title layer-empty-title type type--pos-large-medium">
                    No layers have been skipped yet.
                  </h3>
                </div>
              ) : (
                <ul className="list">{listItems}</ul>
              )}
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
