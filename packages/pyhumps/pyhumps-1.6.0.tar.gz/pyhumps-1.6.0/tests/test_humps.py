# -*- coding: utf-8 -*-
import humps


def test_converting_strings():
    assert humps.camelize("jack_in_the_box") == "jackInTheBox"
    assert humps.decamelize("rubyTuesdays") == "ruby_tuesdays"
    assert humps.depascalize("UnosPizza") == "unos_pizza"
    assert humps.pascalize("red_robin") == "RedRobin"


def test_camelized_acronyms():
    assert humps.decamelize("PERatio") == "pe_ratio"
    assert humps.decamelize("HTTPResponse") == "http_response"
    assert humps.decamelize("_HTTPResponse") == "_http_response"
    assert humps.decamelize("_HTTPResponse__") == "_http_response__"
    assert humps.decamelize("BIP73") == "BIP73"
    assert humps.decamelize("BIP72b") == "bip72b"


def test_conditionals():
    assert humps.is_pascalcase("RedRobin")
    assert humps.is_snakecase("RedRobin") is False
    assert humps.is_camelcase("RedRobin") is False

    assert humps.is_snakecase("ruby_tuesdays")
    assert humps.is_camelcase("ruby_tuesdays") is False
    assert humps.is_pascalcase("jackInTheBox") is False

    assert humps.is_camelcase("jackInTheBox")
    assert humps.is_snakecase("jackInTheBox") is False
    assert humps.is_pascalcase("jackInTheBox") is False

    assert humps.is_camelcase("API")
    assert humps.is_pascalcase("API")
    assert humps.is_snakecase("API")


def test_numeric():
    assert humps.camelize(1234) == 1234
    assert humps.decamelize(123) == 123
    assert humps.pascalize(123) == 123


def test_upper():
    assert humps.camelize("API") == "API"
    assert humps.decamelize("API") == "API"
    assert humps.pascalize("API") == "API"
    assert humps.depascalize("API") == "API"


def test_camelize():
    actual = humps.camelize(
        {
            "videos": [
                {
                    "fallback_url": "https://media.io/video",
                    "scrubber_media_url": "https://media.io/video",
                    "dash_url": "https://media.io/video",
                },
            ],
            "images": [
                {
                    "fallback_url": "https://media.io/image",
                    "scrubber_media_url": "https://media.io/image",
                    "url": "https://media.io/image",
                },
            ],
            "other": [
                {
                    "_fallback_url": "https://media.io/image",
                    "__scrubber_media___url_": "https://media.io/image",
                    "_url__": "https://media.io/image",
                },
                {
                    "API": "test_upper",
                    "_API_": "test_upper",
                    "__API__": "test_upper",
                    "APIResponse": "test_acronym",
                    "_APIResponse_": "test_acronym",
                    "__APIResponse__": "test_acronym",
                },
            ],
        }
    )
    expected = {
        "videos": [
            {
                "fallbackUrl": "https://media.io/video",
                "scrubberMediaUrl": "https://media.io/video",
                "dashUrl": "https://media.io/video",
            },
        ],
        "images": [
            {
                "fallbackUrl": "https://media.io/image",
                "scrubberMediaUrl": "https://media.io/image",
                "url": "https://media.io/image",
            },
        ],
        "other": [
            {
                "_fallbackUrl": "https://media.io/image",
                "__scrubberMediaUrl_": "https://media.io/image",
                "_url__": "https://media.io/image",
            },
            {
                "API": "test_upper",
                "_API_": "test_upper",
                "__API__": "test_upper",
                "APIResponse": "test_acronym",
                "_APIResponse_": "test_acronym",
                "__APIResponse__": "test_acronym",
            },
        ],
    }
    assert actual == expected


def test_pascalize():
    actual = humps.pascalize(
        {
            "videos": [
                {
                    "fallback_url": "https://media.io/video",
                    "scrubber_media_url": "https://media.io/video",
                    "dash_url": "https://media.io/video",
                },
            ],
            "images": [
                {
                    "fallback_url": "https://media.io/image",
                    "scrubber_media_url": "https://media.io/image",
                    "url": "https://media.io/image",
                },
            ],
            "other": [
                {
                    "_fallback_url": "https://media.io/image",
                    "__scrubber_media___url_": "https://media.io/image",
                    "_url__": "https://media.io/image",
                },
                {
                    "API": "test_upper",
                    "_API_": "test_upper",
                    "__API__": "test_upper",
                    "APIResponse": "test_acronym",
                    "_APIResponse_": "test_acronym",
                    "__APIResponse__": "test_acronym",
                },
            ],
        }
    )
    expected = {
        "Videos": [
            {
                "FallbackUrl": "https://media.io/video",
                "ScrubberMediaUrl": "https://media.io/video",
                "DashUrl": "https://media.io/video",
            },
        ],
        "Images": [
            {
                "FallbackUrl": "https://media.io/image",
                "ScrubberMediaUrl": "https://media.io/image",
                "Url": "https://media.io/image",
            },
        ],
        "Other": [
            {
                "_FallbackUrl": "https://media.io/image",
                "__ScrubberMediaUrl_": "https://media.io/image",
                "_Url__": "https://media.io/image",
            },
            {
                "API": "test_upper",
                "_API_": "test_upper",
                "__API__": "test_upper",
                "APIResponse": "test_acronym",
                "_APIResponse_": "test_acronym",
                "__APIResponse__": "test_acronym",
            },
        ],
    }
    assert actual == expected


def test_decamelize():
    actual = humps.decamelize(
        [
            {
                "symbol": "AAL",
                "lastPrice": 31.78,
                "changePct": 2.8146,
                "impliedVolatality": 0.482,
            },
            {
                "symbol": "LBTYA",
                "lastPrice": 25.95,
                "changePct": 2.6503,
                "impliedVolatality": 0.7287,
            },
            {
                "_symbol": "LBTYK",
                "changePct_": 2.5827,
                "_lastPrice__": 25.42,
                "__impliedVolatality_": 0.4454,
            },
            {
                "API": "test_upper",
                "_API_": "test_upper",
                "__API__": "test_upper",
                "APIResponse": "test_acronym",
                "_APIResponse_": "test_acronym",
                "__APIResponse__": "test_acronym",
                "ruby_tuesdays": "ruby_tuesdays",
            },
        ]
    )
    expected = [
        {
            "symbol": "AAL",
            "last_price": 31.78,
            "change_pct": 2.8146,
            "implied_volatality": 0.482,
        },
        {
            "symbol": "LBTYA",
            "last_price": 25.95,
            "change_pct": 2.6503,
            "implied_volatality": 0.7287,
        },
        {
            "_symbol": "LBTYK",
            "change_pct_": 2.5827,
            "_last_price__": 25.42,
            "__implied_volatality_": 0.4454,
        },
        {
            "API": "test_upper",
            "_API_": "test_upper",
            "__API__": "test_upper",
            "api_response": "test_acronym",
            "_api_response_": "test_acronym",
            "__api_response__": "test_acronym",
            "ruby_tuesdays": "ruby_tuesdays",
        },
    ]

    assert actual == expected


def test_depascalize():
    actual = humps.depascalize(
        [
            {
                "Symbol": "AAL",
                "LastPrice": 31.78,
                "ChangePct": 2.8146,
                "ImpliedVolatality": 0.482,
            },
            {
                "Symbol": "LBTYA",
                "LastPrice": 25.95,
                "ChangePct": 2.6503,
                "ImpliedVolatality": 0.7287,
            },
            {
                "_Symbol": "LBTYK",
                "ChangePct_": 2.5827,
                "_LastPrice__": 25.42,
                "__ImpliedVolatality_": 0.4454,
            },
            {
                "API": "test_upper",
                "_API_": "test_upper",
                "__API__": "test_upper",
                "APIResponse": "test_acronym",
                "_APIResponse_": "test_acronym",
                "__APIResponse__": "test_acronym",
                "ruby_tuesdays": "ruby_tuesdays",
            },
        ]
    )
    expected = [
        {
            "symbol": "AAL",
            "last_price": 31.78,
            "change_pct": 2.8146,
            "implied_volatality": 0.482,
        },
        {
            "symbol": "LBTYA",
            "last_price": 25.95,
            "change_pct": 2.6503,
            "implied_volatality": 0.7287,
        },
        {
            "_symbol": "LBTYK",
            "change_pct_": 2.5827,
            "_last_price__": 25.42,
            "__implied_volatality_": 0.4454,
        },
        {
            "API": "test_upper",
            "_API_": "test_upper",
            "__API__": "test_upper",
            "api_response": "test_acronym",
            "_api_response_": "test_acronym",
            "__api_response__": "test_acronym",
            "ruby_tuesdays": "ruby_tuesdays",
        },
    ]

    assert actual == expected
