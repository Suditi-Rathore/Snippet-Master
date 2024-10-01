"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { ReactNode } from "react";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { Dispatch, SetStateAction } from "react";

type UserContextType = {
  userId: string | null;
  isSignedIn: boolean;
  quickLink: LinkType;
  handleQuickLinkClick: (id: string) => void;
  optionLink: LinkType;
  handleOptionLinkClick: (id: string) => void;
  languageUsed: LangType;
  user: UserResource | null | undefined;
  handleTheme: (id: string) => void;
  handleCurrentTheme: () => boolean;
  createSnippet: boolean;
  setCreateSnippet: Dispatch<SetStateAction<boolean>>;
  language: string[];
  setNewNode: Dispatch<SetStateAction<NewNode | null>>;
  nodeArray: NodeArrType;
  tagStatus: boolean;
  setTagStatus: Dispatch<SetStateAction<boolean>>;
  addTag: boolean;
  setAddTag: Dispatch<SetStateAction<boolean>>;
  handleTagSubmit: (tag: string) => void;
  tagArray: TagArrType;
  handleTagDelete: (id: string) => void;
  handleTagEdit: ({ id, tag }: { id: string; tag: string }) => void;
  editingTag: boolean;
  setEditingTag: Dispatch<SetStateAction<boolean>>;
  handleTagEditSave: (newTag: string) => void;
  editTagText: string;
  setEditTagText: Dispatch<SetStateAction<string>>;
};

interface ContextProviderChild {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | null>(null);

type LinkType = {
  id: string;
  name: string;
  icon: ReactNode;
  isSelected: boolean;
}[];

type LangType = {
  id: string;
  icon: ReactNode;
  name: string;
  count: number;
}[];

type ThemeType = {
  id: string;
  isActive: boolean;
}[];
type NodeArrType = NewNode[];
type TagArrType = { id: string; tag: string }[];

type NewNode = {
  title: string;
  tag: TagArrType;
  discription: string;
  lang: string;
  code: string;
};

type Tag = { id: string; tag: string };

const initialQuickLinks: LinkType = [
  {
    id: "1",
    name: "All Snippets",
    icon: <i className="bi bi-border-all pr-2"></i>,
    isSelected: true,
  },
  {
    id: "2",
    name: "Favorites",
    icon: <i className="bi bi-heart pr-2"></i>,
    isSelected: false,
  },
  {
    id: "3",
    name: "Trash",
    icon: <i className="bi bi-trash pr-2"></i>,
    isSelected: false,
  },
];
const initialOptionLinks: LinkType = [
  {
    id: "tags",
    name: "Tags",
    icon: (
      <>
        <i className="bi bi-tags  not-italic">
          <span className="pl-2">Tags</span>
        </i>
      </>
    ),
    isSelected: false,
  },
  {
    id: "5",
    name: "Sign Out",
    icon: (
      <>
        <SignedIn>
          <i className="bi bi-box-arrow-right pr-2"></i>
          <SignOutButton />
        </SignedIn>
      </>
    ),
    isSelected: false,
  },
];
const languageUsed: LangType = [
  {
    id: "a",
    icon: <i className="bi bi-filetype-js text-gray-600 font-semibold"></i>,
    name: "JavaScript",
    count: 1,
  },
  {
    id: "b",
    icon: <i className="bi bi-filetype-py text-gray-600 font-semibold"></i>,
    name: "Python",
    count: 2,
  },
];
const themes: ThemeType = [
  {
    id: "light",
    isActive: true,
  },
  {
    id: "dark",
    isActive: false,
  },
];
const language: string[] = [
  "Javascript",
  "Python",
  "C#",
  "Ruby",
  "PHP",
  "Swift",
  "Go",
  "Kotlin",
  "Rust",
  "Typescript",
  "Haskell",
  "Perl",
  "Shell",
  "C",
  "C++",
  "R",
  "Elixir",
  "Node",
];

export const ContextProvider = ({ children }: ContextProviderChild) => {
  const { user, isSignedIn } = useUser();
  const [userId, setUserId] = useState<string | null>(null);
  const [quickLink, setQuickLink] = useState<LinkType>(initialQuickLinks);
  const [optionLink, setOptionLink] = useState<LinkType>(initialOptionLinks);
  const [theme, setTheme] = useState<ThemeType>(themes);
  const [createSnippet, setCreateSnippet] = useState<boolean>(false);
  const [newNode, setNewNode] = useState<NewNode | null>(null);
  const [tagStatus, setTagStatus] = useState<boolean>(false);
  const [addTag, setAddTag] = useState<boolean>(false);
  const [editingTag, setEditingTag] = useState<boolean>(false);
  const [editTagText, setEditTagText] = useState<string>("");
  const [editID, setEditID] = useState<string>("");
  const [favStatus,setFavStatus] =useState<boolean>(false);
  const [binStatus,setBinStatus] =useState<boolean>(false);
  const [allStatus,setAllStatus] =useState<boolean>(true);
  const [nodeArray, setnodeArray] = useState<NodeArrType>(() => {
    const savedNodeArray = localStorage.getItem("nodeArray");
    return savedNodeArray ? JSON.parse(savedNodeArray) : [];
  });
  const [tagArray, setTagArray] = useState<TagArrType>(() => {
    const savedTagArray = localStorage.getItem("tagArray");
    return savedTagArray ? JSON.parse(savedTagArray) : [];
  });
  const [heartArray, setHeartArray] = useState<NodeArrType>(() => {
    const savedHeartArray = localStorage.getItem("heartArray");
    return savedHeartArray ? JSON.parse(savedHeartArray) : [];
  });
  const [binArray, setBinArray] = useState<NodeArrType>(() => {
    const savedBinArray = localStorage.getItem("binArray");
    return savedBinArray ? JSON.parse(savedBinArray) : [];
  });




  useEffect(() => {
    if (user) {
      setUserId(user.id);
    } else {
      setUserId(null);
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("nodeArray", JSON.stringify(nodeArray));
  }, [nodeArray,tagArray]);

  useEffect(() => {
    localStorage.setItem("tagArray", JSON.stringify(tagArray));
  }, [tagArray]);

  useEffect(() => {
    localStorage.setItem("heartArray", JSON.stringify(heartArray));
  }, [heartArray]);

  useEffect(() => {
    localStorage.setItem("binArray", JSON.stringify(binArray));
  }, [binArray]);

  const handleQuickLinkClick = (id: string) => {
    const updatedLinks = quickLink.map((link) => ({
      ...link,
      isSelected: link.id === id,
    }));

    setQuickLink(updatedLinks);
  };

  const handleOptionLinkClick = (id: string) => {
    const updatedLinks = optionLink.map((link) => ({
      ...link,
      isSelected: link.id === id,
    }));
    if (id === "tags") {
      setTagStatus(true);
    }

    setOptionLink(updatedLinks);
  };

  const handleTheme = (id: string) => {
    const updatedTheme = theme.map((link) =>
      link.id === id
        ? { ...link, isActive: true }
        : { ...link, isActive: false }
    );

    setTheme(updatedTheme);
  };

  const handleCurrentTheme = () => {
    return theme.some((mode) => mode.isActive === true && mode.id === "light");
  };

  useEffect(() => {
    if (newNode !== null) {
      setnodeArray((p) => [...p, newNode]);
    }
  }, [newNode]);

  const handleTagSubmit = (t: string) => {
    if (tagArray !== null) {
      setTagArray((p) => [...p, { id: crypto.randomUUID(), tag: t }]);
    }
  };
  const handleTagDelete = (id: string) => {
    setTagArray(tagArray.filter((t) => t.id !== id));
  };

  const handleTagEditSave = (newTag: string) => {
    setTagArray((prevArray) =>
      prevArray.map((item) =>
        item.id === editID ? { ...item, tag: newTag } : item
      )
    );

    const updatedArr = nodeArray;
    updatedArr.map((item: NewNode) =>
      item.tag.map((element: Tag) => {
        element.tag === editTagText ? (element.tag = newTag) : "";
      })

    );

    setnodeArray(updatedArr);
  };

  const handleTagEdit = ({ id, tag }: { id: string; tag: string }) => {
    setEditTagText(tag);
    setEditID(id);
  };

  return (
    <UserContext.Provider
      value={{
        userId,
        isSignedIn: Boolean(isSignedIn),
        quickLink,
        handleQuickLinkClick,
        handleOptionLinkClick,
        optionLink,
        languageUsed,
        user,
        handleTheme,
        handleCurrentTheme,
        createSnippet,
        setCreateSnippet,
        language,
        setNewNode,
        nodeArray,
        tagStatus,
        setTagStatus,
        addTag,
        setAddTag,
        handleTagSubmit,
        tagArray,
        handleTagDelete,
        handleTagEdit,
        editingTag,
        setEditingTag,
        handleTagEditSave,
        editTagText,
        setEditTagText,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useProvider must be used within a ContextProvider");
  }

  return context;
};
