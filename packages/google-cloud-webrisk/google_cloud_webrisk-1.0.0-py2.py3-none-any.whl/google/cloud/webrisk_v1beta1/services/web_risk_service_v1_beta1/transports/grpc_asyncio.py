# -*- coding: utf-8 -*-

# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

from typing import Awaitable, Callable, Dict, Optional, Sequence, Tuple

from google.api_core import grpc_helpers_async  # type: ignore
from google.auth import credentials  # type: ignore
from google.auth.transport.grpc import SslCredentials  # type: ignore

import grpc  # type: ignore
from grpc.experimental import aio  # type: ignore

from google.cloud.webrisk_v1beta1.types import webrisk

from .base import WebRiskServiceV1Beta1Transport
from .grpc import WebRiskServiceV1Beta1GrpcTransport


class WebRiskServiceV1Beta1GrpcAsyncIOTransport(WebRiskServiceV1Beta1Transport):
    """gRPC AsyncIO backend transport for WebRiskServiceV1Beta1.

    Web Risk v1beta1 API defines an interface to detect malicious
    URLs on your website and in client applications.

    This class defines the same methods as the primary client, so the
    primary client can load the underlying transport implementation
    and call it.

    It sends protocol buffers over the wire using gRPC (which is built on
    top of HTTP/2); the ``grpcio`` package must be installed.
    """

    _grpc_channel: aio.Channel
    _stubs: Dict[str, Callable] = {}

    @classmethod
    def create_channel(
        cls,
        host: str = "webrisk.googleapis.com",
        credentials: credentials.Credentials = None,
        credentials_file: Optional[str] = None,
        scopes: Optional[Sequence[str]] = None,
        **kwargs
    ) -> aio.Channel:
        """Create and return a gRPC AsyncIO channel object.
        Args:
            address (Optional[str]): The host for the channel to use.
            credentials (Optional[~.Credentials]): The
                authorization credentials to attach to requests. These
                credentials identify this application to the service. If
                none are specified, the client will attempt to ascertain
                the credentials from the environment.
            credentials_file (Optional[str]): A file with credentials that can
                be loaded with :func:`google.auth.load_credentials_from_file`.
                This argument is ignored if ``channel`` is provided.
            scopes (Optional[Sequence[str]]): A optional list of scopes needed for this
                service. These are only used when credentials are not specified and
                are passed to :func:`google.auth.default`.
            kwargs (Optional[dict]): Keyword arguments, which are passed to the
                channel creation.
        Returns:
            aio.Channel: A gRPC AsyncIO channel object.
        """
        scopes = scopes or cls.AUTH_SCOPES
        return grpc_helpers_async.create_channel(
            host,
            credentials=credentials,
            credentials_file=credentials_file,
            scopes=scopes,
            **kwargs
        )

    def __init__(
        self,
        *,
        host: str = "webrisk.googleapis.com",
        credentials: credentials.Credentials = None,
        credentials_file: Optional[str] = None,
        scopes: Optional[Sequence[str]] = None,
        channel: aio.Channel = None,
        api_mtls_endpoint: str = None,
        client_cert_source: Callable[[], Tuple[bytes, bytes]] = None
    ) -> None:
        """Instantiate the transport.

        Args:
            host (Optional[str]): The hostname to connect to.
            credentials (Optional[google.auth.credentials.Credentials]): The
                authorization credentials to attach to requests. These
                credentials identify the application to the service; if none
                are specified, the client will attempt to ascertain the
                credentials from the environment.
                This argument is ignored if ``channel`` is provided.
            credentials_file (Optional[str]): A file with credentials that can
                be loaded with :func:`google.auth.load_credentials_from_file`.
                This argument is ignored if ``channel`` is provided.
            scopes (Optional[Sequence[str]]): A optional list of scopes needed for this
                service. These are only used when credentials are not specified and
                are passed to :func:`google.auth.default`.
            channel (Optional[aio.Channel]): A ``Channel`` instance through
                which to make calls.
            api_mtls_endpoint (Optional[str]): The mutual TLS endpoint. If
                provided, it overrides the ``host`` argument and tries to create
                a mutual TLS channel with client SSL credentials from
                ``client_cert_source`` or applicatin default SSL credentials.
            client_cert_source (Optional[Callable[[], Tuple[bytes, bytes]]]): A
                callback to provide client SSL certificate bytes and private key
                bytes, both in PEM format. It is ignored if ``api_mtls_endpoint``
                is None.

        Raises:
            google.auth.exceptions.MutualTlsChannelError: If mutual TLS transport
              creation failed for any reason.
          google.api_core.exceptions.DuplicateCredentialArgs: If both ``credentials``
              and ``credentials_file`` are passed.
        """
        if channel:
            # Sanity check: Ensure that channel and credentials are not both
            # provided.
            credentials = False

            # If a channel was explicitly provided, set it.
            self._grpc_channel = channel
        elif api_mtls_endpoint:
            host = (
                api_mtls_endpoint
                if ":" in api_mtls_endpoint
                else api_mtls_endpoint + ":443"
            )

            # Create SSL credentials with client_cert_source or application
            # default SSL credentials.
            if client_cert_source:
                cert, key = client_cert_source()
                ssl_credentials = grpc.ssl_channel_credentials(
                    certificate_chain=cert, private_key=key
                )
            else:
                ssl_credentials = SslCredentials().ssl_credentials

            # create a new channel. The provided one is ignored.
            self._grpc_channel = type(self).create_channel(
                host,
                credentials=credentials,
                credentials_file=credentials_file,
                ssl_credentials=ssl_credentials,
                scopes=scopes or self.AUTH_SCOPES,
            )

        # Run the base constructor.
        super().__init__(
            host=host,
            credentials=credentials,
            credentials_file=credentials_file,
            scopes=scopes or self.AUTH_SCOPES,
        )

        self._stubs = {}

    @property
    def grpc_channel(self) -> aio.Channel:
        """Create the channel designed to connect to this service.

        This property caches on the instance; repeated calls return
        the same channel.
        """
        # Sanity check: Only create a new channel if we do not already
        # have one.
        if not hasattr(self, "_grpc_channel"):
            self._grpc_channel = self.create_channel(
                self._host, credentials=self._credentials,
            )

        # Return the channel from cache.
        return self._grpc_channel

    @property
    def compute_threat_list_diff(
        self,
    ) -> Callable[
        [webrisk.ComputeThreatListDiffRequest],
        Awaitable[webrisk.ComputeThreatListDiffResponse],
    ]:
        r"""Return a callable for the compute threat list diff method over gRPC.

        Gets the most recent threat list diffs.

        Returns:
            Callable[[~.ComputeThreatListDiffRequest],
                    Awaitable[~.ComputeThreatListDiffResponse]]:
                A function that, when called, will call the underlying RPC
                on the server.
        """
        # Generate a "stub function" on-the-fly which will actually make
        # the request.
        # gRPC handles serialization and deserialization, so we just need
        # to pass in the functions for each.
        if "compute_threat_list_diff" not in self._stubs:
            self._stubs["compute_threat_list_diff"] = self.grpc_channel.unary_unary(
                "/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/ComputeThreatListDiff",
                request_serializer=webrisk.ComputeThreatListDiffRequest.serialize,
                response_deserializer=webrisk.ComputeThreatListDiffResponse.deserialize,
            )
        return self._stubs["compute_threat_list_diff"]

    @property
    def search_uris(
        self,
    ) -> Callable[[webrisk.SearchUrisRequest], Awaitable[webrisk.SearchUrisResponse]]:
        r"""Return a callable for the search uris method over gRPC.

        This method is used to check whether a URI is on a
        given threatList.

        Returns:
            Callable[[~.SearchUrisRequest],
                    Awaitable[~.SearchUrisResponse]]:
                A function that, when called, will call the underlying RPC
                on the server.
        """
        # Generate a "stub function" on-the-fly which will actually make
        # the request.
        # gRPC handles serialization and deserialization, so we just need
        # to pass in the functions for each.
        if "search_uris" not in self._stubs:
            self._stubs["search_uris"] = self.grpc_channel.unary_unary(
                "/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/SearchUris",
                request_serializer=webrisk.SearchUrisRequest.serialize,
                response_deserializer=webrisk.SearchUrisResponse.deserialize,
            )
        return self._stubs["search_uris"]

    @property
    def search_hashes(
        self,
    ) -> Callable[
        [webrisk.SearchHashesRequest], Awaitable[webrisk.SearchHashesResponse]
    ]:
        r"""Return a callable for the search hashes method over gRPC.

        Gets the full hashes that match the requested hash
        prefix. This is used after a hash prefix is looked up in
        a threatList and there is a match. The client side
        threatList only holds partial hashes so the client must
        query this method to determine if there is a full hash
        match of a threat.

        Returns:
            Callable[[~.SearchHashesRequest],
                    Awaitable[~.SearchHashesResponse]]:
                A function that, when called, will call the underlying RPC
                on the server.
        """
        # Generate a "stub function" on-the-fly which will actually make
        # the request.
        # gRPC handles serialization and deserialization, so we just need
        # to pass in the functions for each.
        if "search_hashes" not in self._stubs:
            self._stubs["search_hashes"] = self.grpc_channel.unary_unary(
                "/google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1/SearchHashes",
                request_serializer=webrisk.SearchHashesRequest.serialize,
                response_deserializer=webrisk.SearchHashesResponse.deserialize,
            )
        return self._stubs["search_hashes"]


__all__ = ("WebRiskServiceV1Beta1GrpcAsyncIOTransport",)
