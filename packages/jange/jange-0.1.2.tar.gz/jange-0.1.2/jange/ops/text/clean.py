from typing import Optional, List, Dict, Tuple

from spacy.tokens import Doc
from spacy.language import Language
from spacy.matcher import Matcher

from jange.stream import DataStream
from ..base import Operation, SpacyBasedOperation


class CaseChangeOperation(Operation):
    """Operation for changing case of the texts.

    Parameters
    ----------
    mode : str
        one of `lower`, `upper` or `capitalize`

    name : str
        name of this operation

    Example
    --------
    >>> ds = DataStream(["AAA", "Bbb"])
    >>> list(ds.apply(CaseChangeOperation(mode="lower)))
    ["aaa", "bbb"]

    Attributes
    ----------
    mode : str
        one of ['lower', 'capitalize', 'upper']

    name : str
        name of this operation
    """

    def __init__(self, mode: str = "lower", name: str = "case_change"):
        super().__init__(name=name)
        valid_modes = ["lower", "upper", "capitalize"]
        mode = mode.lower()
        if mode not in valid_modes:
            raise ValueError(
                f"Invalid value for mode passed."
                f" Expected one of {valid_modes} but received {mode}"
            )
        self.mode = mode

    def run(self, ds: DataStream):
        if self.mode == "upper":
            fn = str.upper
        elif self.mode == "capitalize":
            fn = str.capitalize
        else:
            fn = str.lower
        items = map(fn, ds)
        return DataStream(
            applied_ops=ds.applied_ops + [self], items=items, context=ds.context
        )

    def __repr__(self):
        return f"CaseChangeOperation(mode='{self.mode}')"


def lowercase(name="lowercase") -> CaseChangeOperation:
    """Helper function to create CaseChangeOperation with mode="lower"
    """
    return CaseChangeOperation(mode="lower", name=name)


def uppercase(name="uppercase") -> CaseChangeOperation:
    """Helper function to create CaseChangeOperation with mode="upper"
    """
    return CaseChangeOperation(mode="upper", name=name)


class ConvertToSpacyDocOperation(SpacyBasedOperation):
    """Convert a stream of texts to stream of spacy's `Doc`s.
    Once spacy processes a text, it creates an instance of `Doc`
    which contains a lot of information like part of speech, named
    entities and many others. It is usually better to convert texts
    to spacy's Doc and perform operations on them. For example, spacy
    has powerful pattern matching features which can be used.

    Any operation that expects a `nlp` object can benefit if you pass
    a stream of spacy `Doc`s instead of stream of strings. Otherwise those
    operations will independently convert the raw texts into spacy `Doc`
    everytime you call them!

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Example
    -------
    >>> ds = DataStream(["this is text 1", "this is text 2"])
    >>> op = ConvertToSpacyDocOperation(nlp=nlp)
    >>> ds.apply(op)

    Attributes
    ---------
    nlp : spacy.language.Language
        spacy's language model

    name : str
        name of this operation
    """

    def __init__(
        self,
        nlp: Optional[Language] = None,
        name: Optional[str] = "convert_to_spacy_doc",
    ) -> None:
        super().__init__(nlp, name=name)

    def run(self, ds: DataStream) -> DataStream:
        docs = self.get_docs(ds)
        return DataStream(docs, applied_ops=ds.applied_ops + [self], context=ds.context)


def convert_to_spacy_doc(
    nlp: Optional[Language] = None, name: str = "convert_to_spacy_doc"
) -> ConvertToSpacyDocOperation:
    """Helper function to return ConvertToSpacyDocOperation

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    out : ConvertToSpacyDocOperation
    """
    return ConvertToSpacyDocOperation(nlp=nlp, name=name)


class LemmatizeOperation(SpacyBasedOperation):
    """Perform lemmatization using spacy's language model

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Example
    -------
    >>> nlp = spacy.load("en_core_web_sm")
    >>> op = LemmatizeOperation(nlp=nlp)
    >>> ds = DataStream(["oranges are good"])
    >>> print(list(ds.apply(op))
    ["orange be good"]

    Attributes
    ---------
    nlp : spacy.language.Language
        spacy's language model

    name : str
        name of this operation
    """

    def __init__(
        self, nlp: Optional[Language] = None, name: Optional[str] = "lemmatize"
    ) -> None:
        super().__init__(nlp, name=name)

    def _get_lemmatized_doc(self, doc):
        lemma_tokens = [t.lemma_ for t in doc]
        return self.nlp.make_doc(" ".join(lemma_tokens))

    def run(self, ds: DataStream):
        docs = self.get_docs(ds)
        items = map(self._get_lemmatized_doc, docs)
        for _, proc in self.nlp.pipeline:
            items = proc.pipe(items)
        return DataStream(
            applied_ops=ds.applied_ops + [self], items=items, context=ds.context
        )

    def __repr__(self):
        return "LemmatizeOperation()"


def lemmatize(nlp: Optional[Language] = None, name="lemmatize") -> LemmatizeOperation:
    """Helper function to return LemmatizeOperation

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    out : LemmatizeOperation
    """
    return LemmatizeOperation(nlp, name="lemmatize")


class TokenFilterOperation(SpacyBasedOperation):
    """Operation for filtering individual tokens.

    Spacy's token pattern matching is used for matching various
    tokens in the document. Any tokens matching the filter can
    either be discarded or kept while discarding the non matching ones.

    Parameters
    ----------
    patterns : List[List[Dict]]
        a list of patterns where each pattern is a List[Dict]. The patterns
        are passed to spacy's Token Matcher.
        see https://spacy.io/usage/rule-based-matching for more details
        on how to define patterns.

    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    keep_matching_tokens: bool
        if true then any non-matching tokens are discarded from the document (e.g. extracting only nouns)
        if false then any matching tokens are discarded (e.g. stopword removal)

    name : Optional[str]
        name of this operation

    Example
    -------
    >>> nlp = spacy.load("en_core_web_sm")
    >>> # define patterns to match [a, an, the] tokens
    >>> patterns = [
        [{"LOWER": "a"}],
        [{"LOWER": "an"}],
        [{"LOWER": "the"}]
    ]
    >>> # define the token filter operation to match the patterns and discard them
    >>> op = TokenFilterOperation(patterns=patterns, nlp=nlp, keep_matching_tokens=False)
    >>> ds = DataStream(["that is an orange"])
    >>> print(list(ds.apply(op))
    ["that is orange"]

    See https://spacy.io/usage/rule-based-matching#adding-patterns-attributes for more details
    on what token patterns can be used.

    Attributes
    ---------
    nlp : spacy.language.Language
        spacy's language model

    keep_matching_tokens : bool
        whether to discard the tokens matched by the filter from the document
        or to keep them

    patterns : List[List[Dict]]
        patterns to pass to spacy's Matcher

    name : str
        name of this operation

    """

    def __init__(
        self,
        patterns: List[List[Dict]],
        nlp: Optional[Language] = None,
        keep_matching_tokens=False,
        name: Optional[str] = "token_filter",
    ) -> None:
        super().__init__(nlp, name=name)
        self.keep_matching_tokens = keep_matching_tokens
        self.patterns = patterns
        self.matcher = self._get_matcher(self.nlp, self.patterns)

    def _get_matcher(self, nlp, patterns):
        matcher = Matcher(vocab=nlp.vocab, validate=True)

        for p in patterns:
            matcher.add("MATCHES", None, p)

        return matcher

    def _filter_tokens(self, matcher_output: Tuple[Doc, List[Tuple]]) -> Doc:
        doc, matches = matcher_output
        matching_token_ids = []
        for _, start, end in matches:
            for token in doc[start:end]:
                matching_token_ids.append(token.i)

        tokens_to_discard = matching_token_ids
        if self.keep_matching_tokens:
            tokens_to_discard = [t.i for t in doc if t.i not in matching_token_ids]

        return self.discard_tokens_from_doc(doc, tokens_to_discard)

    def run(self, ds: DataStream) -> DataStream:
        docs = self.get_docs(ds)
        match_results = self.matcher.pipe(docs, return_matches=True)
        new_docs = map(self._filter_tokens, match_results)
        for _, proc in self.nlp.pipeline:
            new_docs = proc.pipe(new_docs)
        return DataStream(
            new_docs, applied_ops=ds.applied_ops + [self], context=ds.context
        )

    def __getstate__(self):
        state = super().__getstate__()
        del state["matcher"]
        return state

    def __setstate__(self, state: dict):
        super().__setstate__(state)
        self.matcher = self._get_matcher(self.nlp, self.patterns)


def token_filter(
    patterns: List[List[Dict]],
    keep_matching_tokens,
    nlp: Optional[Language] = None,
    name: Optional[str] = "token_filter",
) -> TokenFilterOperation:
    """Helper function to create TokenFilterOperation

    Parameters
    ----------
    patterns : List[List[Dict]]
        a list of patterns where each pattern is a List[Dict]. The patterns
        are passed to spacy's Token Matcher.
        see https://spacy.io/usage/rule-based-matching for more details
        on how to define patterns.

    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    keep_matching_tokens: bool
        if true then any non-matching tokens are discarded from the document (e.g. extracting only nouns)
        if false then any matching tokens are discarded (e.g. stopword removal)

    name : Optional[str]
        name of this operation

    Returns
    -------
    TokenFilterOperation
    """
    return TokenFilterOperation(
        patterns=patterns,
        nlp=nlp,
        keep_matching_tokens=keep_matching_tokens,
        name=name,
    )


def remove_stopwords(
    words: List[str],
    nlp: Optional[Language] = None,
    name: Optional[str] = "remove_stopwords",
) -> TokenFilterOperation:
    """TokenFilterOperation to remove stopwords

    Parameters
    ----------
    words : List[str]
        a list of words to remove from the text

    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    TokenFilterOperation
    """
    patterns = []
    for word in words:
        patterns.append([{"LOWER": word.lower()}])
    return TokenFilterOperation(
        patterns, nlp=nlp, keep_matching_tokens=False, name=name
    )


def remove_numbers(
    nlp: Optional[Language] = None, name: Optional[str] = "remove_numbers"
) -> TokenFilterOperation:
    """TokenFilterOperation to remove numbers

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    TokenFilterOperation
    """
    patterns = [[{"IS_DIGIT": True}]]
    return TokenFilterOperation(
        patterns, nlp=nlp, keep_matching_tokens=False, name=name
    )


def remove_links(
    nlp: Optional[Language] = None, name: Optional[str] = "remove_links"
) -> TokenFilterOperation:
    """TokenFilterOperation to remove hyperlinks

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    TokenFilterOperation
    """
    patterns = [[{"LIKE_URL": True}]]
    return TokenFilterOperation(
        patterns, nlp=nlp, keep_matching_tokens=False, name=name
    )


def remove_emails(
    nlp: Optional[Language] = None, name: Optional[str] = "remove_emails"
) -> TokenFilterOperation:
    """TokenFilterOperation to remove emails

    Parameters
    ----------
    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    TokenFilterOperation
    """
    patterns = [[{"LIKE_EMAIL": True}]]
    return TokenFilterOperation(
        patterns, nlp=nlp, keep_matching_tokens=False, name=name
    )


def remove_words_with_length_less_than(
    length: int,
    nlp: Optional[Language] = None,
    name: Optional[str] = "remove_words_with_length_less_than",
) -> TokenFilterOperation:
    """TokenFilterOperation to remove tokens that have fewer characters
    than specified

    Parameters
    ----------
    length : int
        atleast this many characters should be in the token, otherwise
        it is discarded

    nlp : Optional[spacy.language.Language]
        spacy's language model or None. If None then by default
        `en_core_web_sm` spacy model is loaded

    name : Optional[str]
        name of this operation

    Returns
    -------
    TokenFilterOperation
    """
    patterns = [[{"LENGTH": {"<": length}}]]
    return TokenFilterOperation(
        patterns, nlp=nlp, keep_matching_tokens=False, name=name,
    )
