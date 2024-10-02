/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/vaultplex.json`.
 */
export type Vaultplex = {
  "address": "9a8aV7w4h7xpoFKnCuXvwef3pXexBbeJBUmMh79sQ5xb",
  "metadata": {
    "name": "vaultplex",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "depositSol",
      "discriminator": [
        108,
        81,
        78,
        117,
        125,
        155,
        56,
        200
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultConfig",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "vault_config.seed",
                "account": "vaultConfig"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vault_config.seed",
                "account": "vaultConfig"
              }
            ]
          }
        },
        {
          "name": "feeTreasury",
          "writable": true,
          "optional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "vaultConfig"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeAccessControlExtension",
      "discriminator": [
        85,
        240,
        13,
        64,
        92,
        56,
        165,
        160
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "accessControlAuthority",
          "type": "pubkey"
        },
        {
          "name": "accessControlType",
          "type": {
            "defined": {
              "name": "accessControlType"
            }
          }
        }
      ]
    },
    {
      "name": "initializeDepositPeriodExtension",
      "discriminator": [
        227,
        25,
        59,
        65,
        96,
        114,
        231,
        231
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "startSlot",
          "type": "u64"
        },
        {
          "name": "endSlot",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeFeeExtension",
      "discriminator": [
        190,
        245,
        126,
        154,
        240,
        32,
        236,
        144
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "treasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  102,
                  101,
                  101,
                  95,
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "vaultConfig"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "feeAuthority",
          "type": "pubkey"
        },
        {
          "name": "feeCollector",
          "type": "pubkey"
        },
        {
          "name": "depositFeeBasisPoints",
          "type": "u16"
        },
        {
          "name": "maxDepositFee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeLockExtension",
      "discriminator": [
        77,
        136,
        159,
        159,
        19,
        138,
        255,
        221
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "lockAuthority",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeShareExtension",
      "discriminator": [
        125,
        219,
        121,
        32,
        2,
        87,
        242,
        254
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "vsharesMint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  104,
                  97,
                  114,
                  101,
                  95,
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vaultConfig"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "mintAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeVault",
      "discriminator": [
        48,
        191,
        163,
        44,
        71,
        129,
        63,
        164
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultConfig",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116,
                  95,
                  99,
                  111,
                  110,
                  102,
                  105,
                  103
                ]
              },
              {
                "kind": "arg",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "vault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "seed",
          "type": "u64"
        }
      ]
    },
    {
      "name": "lockVault",
      "discriminator": [
        88,
        219,
        122,
        115,
        28,
        236,
        222,
        117
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "unlockVault",
      "discriminator": [
        208,
        120,
        125,
        99,
        55,
        12,
        246,
        239
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "vaultConfig"
          ]
        },
        {
          "name": "vaultConfig",
          "writable": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "treasuryData",
      "discriminator": [
        73,
        12,
        230,
        7,
        66,
        226,
        146,
        109
      ]
    },
    {
      "name": "vaultConfig",
      "discriminator": [
        99,
        86,
        43,
        216,
        184,
        102,
        119,
        77
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorized",
      "msg": "Unauthorized access to lock or unlock the vault"
    },
    {
      "code": 6001,
      "name": "vaultLocked",
      "msg": "The vault is currently locked"
    },
    {
      "code": 6002,
      "name": "overflow",
      "msg": "The vault operation just overflowed"
    },
    {
      "code": 6003,
      "name": "vaultClosedForDeposits",
      "msg": "The vault is closed for deposits at the current slot"
    },
    {
      "code": 6004,
      "name": "extensionNotFound",
      "msg": "Extension not found in the vault data"
    },
    {
      "code": 6005,
      "name": "extensionOffsetFailed",
      "msg": "Writing in Extension failed. No offset found"
    },
    {
      "code": 6006,
      "name": "wrongType",
      "msg": "That instruction is not supported for the current Vault Type"
    },
    {
      "code": 6007,
      "name": "extensionDeserializationFailed",
      "msg": "Deserialiasdasd failed"
    },
    {
      "code": 6008,
      "name": "extensionDepositPeriodNotOpenYet",
      "msg": "Vault deposits are not yet opened"
    },
    {
      "code": 6009,
      "name": "extensionDepositPeriodEnded",
      "msg": "Vault deposits are ended"
    },
    {
      "code": 6010,
      "name": "extensionDepositPeriodFailed",
      "msg": "Vault deposits extension failed"
    },
    {
      "code": 6011,
      "name": "extensionDepositDenied",
      "msg": "You don't have permission to deposit into the vault"
    },
    {
      "code": 6012,
      "name": "feeTreasuryNotProvided",
      "msg": "The fee treasury account wasn't provided"
    }
  ],
  "types": [
    {
      "name": "accessControlType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "public"
          },
          {
            "name": "private"
          }
        ]
      }
    },
    {
      "name": "treasuryData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "vaultConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "extensions",
            "type": {
              "array": [
                "u8",
                176
              ]
            }
          }
        ]
      }
    }
  ],
  "constants": [
    {
      "name": "seed",
      "type": "string",
      "value": "\"anchor\""
    }
  ]
};
