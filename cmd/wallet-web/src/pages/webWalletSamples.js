/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

var uuid = require('uuid/v4')

export function getSample(v) {
    switch (v) {
        case "vc":
            return prc
        case "vp":
            return samplePresentation
        case "getvp":
            return requestVP
        case "pexq":
            return presExchange
        case "pexq-didcomm":
            return presExchangeDIDComm
        case "pexq-didcomm-govnvc":
            return presExchangeDIDCommGovnVC
        case "didauth":
            return didAuth
        case "didconn":
            return didConnQuery
        case "didconn-manifest":
            return didConnQueryWithManifest
        case "didconn-manifest-usrc":
            return didConnQueryWithManifestAndUcred
        case "didconn-manifest-usrc-govvc":
            return didConnQueryWithManifestGovnAndUcred
        default:
            alert('unknown sample type');
    }
}


const prc = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/citizenship/v1"
    ],
    "id": "http://example.gov/credentials/ff98f978-588f-4eb0-b17b-60c18e1dac2c",
    "type": [
        "VerifiableCredential",
        "PermanentResidentCard"
    ],
    "name": "Permanent Resident Card",
    "description": "Permanent Resident Card of Mr.John Smith",
    "issuer": {
        "id": "did:web:example.world",
        "name": "Border Service, NY"
    },
    "issuanceDate": "2019-12-03T12:19:52Z",
    "expirationDate": "2029-12-03T12:19:52Z",
    "credentialSubject": {
        "id": "did:example:b56ca6cd37bbf23",
        "type": [
            "PermanentResident",
            "Person"
        ],
        "givenName": "JOHN",
        "familyName": "SMITH",
        "gender": "Male",
        "image": "data:image/png;base64,iVBORw0KGgo...kJggg==",
        "residentSince": "2015-01-01",
        "lprCategory": "C09",
        "lprNumber": "999-999-999",
        "commuterClassification": "C1",
        "birthCountry": "Bahamas",
        "birthDate": "1958-07-17"
    },
    "proof": {
        "type": "Ed25519Signature2018",
        "created": "2019-12-11T03:50:55Z",
        "verificationMethod": "did:web:example#z6MksHh7qHWvybLg5QTPPdG2DgEjjduBDArV9EF9mRiRzMBN",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..SeUoIpwN_1Zrwc9zcl5NuvI88eJh6mWcxUMROHLrRg9Ubrz1YBhprPjcIZVE9JikK2DOO75pwC06fEwmu4GUAw"
    }
}

const udc = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1",
        "https://trustbloc.github.io/context/vc/examples-ext-v1.jsonld"
    ],
    "id": "http://example.gov/credentials/3732",
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "name": "Bachelor Degree",
    "description": "Bachelor of Science and Arts of Mr.John Smith",
    "issuer": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "credentialSubject": {
        "id": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
        "degree": {"type": "BachelorDegree", "name": "Bachelor of Science and Arts"}
    },
    "proof": {
        "type": "Ed25519Signature2018",
        "created": "2020-03-16T22:37:26Z",
        "verificationMethod": "did:key:z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd#z6MkjRagNiMu91DduvCvgEsqLZDVzrJzFrwahc4tXLt9DoHd",
        "proofPurpose": "assertionMethod",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..7gJwYBvJuXYrFa_hpuWxknm3R5Czas_NDL-Bh7LnURA1PwjH0uBqMy4W4pgYeat3xYa12gZBkmIR0VmgY3qQCw"
    }
}

const govnVC = {
    "@context": ["https://www.w3.org/2018/credentials/v1", "https://trustbloc.github.io/context/governance/context.jsonld", "https://trustbloc.github.io/context/vc/examples-v1.jsonld"],
    "credentialStatus": {
        "id": "http://governance.vcs.example.com:8066/governance/status/1",
        "type": "CredentialStatusList2017"
    },
    "credentialSubject": {
        "data_uri": "https://example.com/data.json",
        "define": [{
            "id": "did:trustbloc:testnet.trustbloc.local:EiDniKF0RDQVRuCSwi7N87O-x7axF7bUZ9tA12uq4qiWLQ",
            "name": "DID"
        }],
        "description": "Governs accredited financial institutions, colleges and universities.",
        "docs_uri": "https://example.com/docs",
        "duties": [{"name": "safe-accredit", "uri": "https://example.com/responsible-accredit"}],
        "geos": ["Canadian"],
        "jurisdictions": ["ca"],
        "logo": "https://example.com/logo",
        "name": "Trustbloc Govn",
        "privileges": [{"name": "accredit", "uri": "https://example.com/accredit"}],
        "roles": ["accreditor"],
        "topics": ["banking"],
        "version": "1.0"
    },
    "issuer": "did:trustbloc:testnet.trustbloc.local:EiDdRGN4x2S4D0xYTPaJEHcD50Sq5fgv0sUfbdgY7x6lkQ",
    "proof": {
        "created": "2020-08-28T15:57:53.7002191Z",
        "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..oRWsB66_fgroRx2YQN1peaz7k636QOahd4etp8wyLCTR0WgEW1KzObgYxvz2AV0zJZHu0mvQi-9Uc5aXsWvBBA",
        "proofPurpose": "assertionMethod",
        "type": "Ed25519Signature2018",
        "verificationMethod": "did:trustbloc:testnet.trustbloc.local:EiDdRGN4x2S4D0xYTPaJEHcD50Sq5fgv0sUfbdgY7x6lkQ#G0E1sRYZv4EQg5EkcNRo"
    },
    "type": ["VerifiableCredential", "GovernanceCredential"]
}


const samplePresentation = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1"
    ],
    type: "VerifiablePresentation",
    verifiableCredential: [prc, udc]
}

const invitation = {
    "@id": "f39d825f-c647-434d-893f-8c76dd6906a9",
    "@type": "https://didcomm.org/oob-invitation/1.0/invitation",
    "label": "wallet-web",
    "protocols": [
        "https://didcomm.org/didexchange/1.0"
    ],
    "service": [
        {
            "ID": "75889a3a-ad89-4f35-8755-6df164e469b9",
            "RecipientKeys": [
                "Fy1CAy7D7AxynyBRFMyZB8S2RNoVPPBqgSDERRYJPyM8"
            ],
            "RoutingKeys": [
                "Goobf693U36p7VZkoRCWdtkEJZVTPCzZwbjm77VKiALC"
            ],
            "ServiceEndpoint": "https://localhost:10091",
            "Type": "did-communication"
        }
    ]
}

const manifest = {
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://trustbloc.github.io/context/vc/issuer-manifest-credential-v1.jsonld"
    ],
    "type": [
        "VerifiableCredential",
        "IssuerManifestCredential"
    ],
    "name": "Example Issuer Manifest Credential",
    "description": "List of verifiable credentials provided by example issuer",
    "id": "http://example.gov/credentials/ff98f978-588f-4eb0-b17b-60c18e1dac2c",
    "issuanceDate": "2020-03-16T22:37:26.544Z",
    "issuer": "did:factom:5d0dd58757119dd437c70d92b44fbf86627ee275f0f2146c3d99e441da342d9f",
    "credentialSubject": {
        "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
        "contexts": [
            "https://w3id.org/citizenship/v3"
        ]
    }
}

const presentationExchangeQuery = {
    "type": "PresentationDefinitionQuery",
    "presentationDefinitionQuery": {
        "submission_requirements": [
            {
                "name": "Education Qualification",
                "purpose": "We need to know if you are qualified for this job",
                "rule": "pick",
                "count": 1,
                "from": [
                    "E"
                ]
            },
            {
                "name": "Citizenship Information",
                "purpose": "You must be legally allowed to work in United States",
                "rule": "all",
                "from": [
                    "C"
                ]
            }
        ],
        "input_descriptors": [
            {
                "id": "citizenship_input_1",
                "group": [
                    "C"
                ],
                "schema": {
                    "uri": [
                        "https://w3id.org/citizenship/v1",
                        "https://w3id.org/citizenship/v2",
                        "https://w3id.org/citizenship/v3"
                    ],
                    "name": "US Permanent resident card"
                },
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSubject.lprCategory"
                            ],
                            "filter": {
                                "type": "string",
                                "pattern": "C09|C52|C57"
                            }
                        }
                    ]
                }
            },
            {
                "id": "degree_input_1",
                "group": [
                    "E"
                ],
                "schema": {
                    "uri": [
                        "https://trustbloc.github.io/context/vc/examples-ext-v1.jsonld"
                    ],
                    "name": "University degree certificate",
                    "purpose": "We need your education qualification details."
                },
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSubject.degree.type"
                            ],
                            "purpose": "Should be masters or bachelors degree",
                            "filter": {
                                "type": "string",
                                "pattern": "BachelorDegree|MastersDegree"
                            }
                        }
                    ]
                }
            },
            {
                "id": "degree_input_2",
                "group": [
                    "E"
                ],
                "schema": {
                    "uri": [
                        "https://trustbloc.github.io/context/vc/examples-ext-v1.jsonld"
                    ],
                    "name": "Diploma certificate",
                    "purpose": "We need your education qualification details."
                },
                "constraints": {
                    "fields": [
                        {
                            "path": [
                                "$.credentialSubject.degree.type"
                            ],
                            "purpose": "Should have valid diploma",
                            "filter": {
                                "type": "string",
                                "pattern": "Diploma"
                            }
                        },
                        {
                            "path": [
                                "$.credentialSubject.degree.coop"
                            ],
                            "purpose": "Should have co-op experience",
                            "filter": {
                                "type": "string",
                                "pattern": "Y"
                            }
                        }
                    ]
                }
            }
        ]
    }
}

const presExchangeDIDComm = {
    web: {
        VerifiablePresentation: {
            query: [
                presentationExchangeQuery,
                {
                    type: "DIDConnect",
                    invitation
                }
            ],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const presExchangeDIDCommGovnVC = {
    web: {
        VerifiablePresentation: {
            query: [
                presentationExchangeQuery,
                {
                    type: "DIDConnect",
                    invitation,
                    credentials: [govnVC]
                }
            ],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const presExchange = {
    web: {
        VerifiablePresentation: {
            query: [
                presentationExchangeQuery
            ],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const requestVP = {
    web: {
        VerifiablePresentation: {
            query: [
                {
                    type: "QueryByExample",
                    credentialQuery: {
                        reason: "Please present a credential for JaneDoe.",
                        example: {
                            "@context": ["https://www.w3.org/2018/credentials/v1", "https://www.w3.org/2018/credentials/examples/v1"],
                            type: ["UniversityDegreeCredential"]
                        }
                    }
                }
            ],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const didAuth = {
    web: {
        VerifiablePresentation: {
            query: {
                "type": "DIDAuth"
            },
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const didConnQuery = {
    web: {
        VerifiablePresentation: {
            query: {type: "DIDConnect"},
            invitation,
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const didConnQueryWithManifest = {
    web: {
        VerifiablePresentation: {
            query: {type: "DIDConnect"},
            invitation,
            credentials: [manifest],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const didConnQueryWithManifestAndUcred = {
    web: {
        VerifiablePresentation: {
            query: {type: "DIDConnect"},
            invitation,
            credentials: [manifest, prc, udc],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}

const didConnQueryWithManifestGovnAndUcred = {
    web: {
        VerifiablePresentation: {
            query: {type: "DIDConnect"},
            invitation,
            credentials: [manifest, govnVC, prc, udc],
            challenge: uuid(),
            domain: "example.com"
        }
    }
}


