import "./index.css";

const TabItem = (props) => {
  const { tabDetails, getActiveTabId, isActive } = props;
  const { tabId, displayText } = tabDetails;

  const tabBtnClassName = isActive ? "tab-button active" : "tab-button";

  const onClickTabItem = () => {
    getActiveTabId(tabId);
  };

  return (
    <li className="tab-item">
      <button
        type="button"
        className={tabBtnClassName}
        onClick={() => onClickTabItem(tabId)}
      >
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
