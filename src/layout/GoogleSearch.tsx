import { AmpImage } from "../components/image/AmpImage"

export const GoogleSearch: React.FC = () => {
  return (
    <div className="google-search">
      <form id="cse-search-box" action="https://google.com/cse" target="_blank">
        <label htmlFor="google-search-input">記事検索</label>
        <input type="hidden" name="cx" value="cd0da1054f762f7ae" />
        <input type="hidden" name="ie" value="UTF-8" />
        <input
          className="search-input"
          id="google-search-input"
          type="text"
          name="q"
          placeholder="Googleカスタム検索"
          autoComplete="off"
        />
        <button className="submit-button" type="submit" name="sa">
          <AmpImage
            src="/images/search-solid.svg"
            alt="search-solid"
            width="50px"
            height="13px"
          />
        </button>
      </form>
      <style jsx>
        {`
          .google-search {
            background-color: rgba(255, 255, 255, 0.2);
            display: inline-block;
            box-sizing: border-box;
            padding: 4px;
            margin: 4px 0;
          }
          form {
            display: flex;
            align-items: center;
            background-color: transparent;
          }
          .submit-button {
            background-color: transparent;
            border: 0;
            cursor: pointer;
            outline: 0;
            padding: 0 3px;
          }
          .search-input {
            background-color: transparent;
            border: 0;
            outline: 0;
            color: #fff;
          }
          .search-input::placeholder {
            color: #fff;
          }
          label {
            font-size: 12px;
            color: #fff;
            margin-right: 10px;
          }
        `}
      </style>
    </div>
  )
}
